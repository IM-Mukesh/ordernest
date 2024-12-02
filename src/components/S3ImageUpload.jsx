import React, { useState } from "react";
import axios from "axios";

const S3ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload2 = async (signedUrl) => {
    try {
      console.log("hiii type is", selectedFile.type);

      await axios.put(signedUrl, selectedFile, {
        headers: {
          "Content-Type": selectedFile.type,
        },
      });
      alert("uploaded successfully...");
    } catch (e) {
      console.log("error", e);
    }
  };

  // Upload file to S3
  const handleUpload = async () => {
    console.log("selected file", selectedFile);

    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    try {
      // Request a signed URL from the backend
      const response = await axios.get("http://localhost:5000/s3-url", {
        params: {
          fileName: selectedFile.name,
          fileType: selectedFile.type,
        },
      });
      console.log("data got is", response.data.url);

      //   console.log("data", signedUrl);

      // Upload the file to S3 using the signed URL
      //   await axios.put(signedUrl, selectedFile, {
      //     headers: {
      //       "Content-Type": selectedFile.type,
      //     },
      //   });
      handleUpload2(response.data.url);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Failed to upload the file.");
    }
  };

  return (
    <div>
      <h2>Upload Image to S3</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleUpload2}>Upload2</button>
    </div>
  );
};

export default S3ImageUpload;
