import { useState } from "react";

function S3ImageUpload2() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = async (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const response = await fetch(
          `http://localhost:5000/s3-presigned-url?filename=${file.name}&mimetype=${file.type}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("data is", data);

        if (data.url) {
          const result = await fetch(data.url, {
            method: "PUT",
            headers: {
              "Content-Type": encodeURI(file.type), // Important to set the correct MIME type
            },
            body: file,
          });

          if (result.status === 200) {
            setUploadStatus("Upload successful!");
          } else {
            setUploadStatus("Upload failed.");
          }
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadStatus("Error occured during upload.");
      }
    }
  };
  return (
    <>
      <input type="file" onChange={handleFileChange} />
      {file && <button onClick={handleUpload}>Upload File</button>}
      {uploadStatus && <p>{uploadStatus}</p>}
    </>
  );
}

export default S3ImageUpload2;
