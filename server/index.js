const express = require("express");
const AWS = require("aws-sdk");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Access Key ID from .env
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Secret Access Key from .env
  region: process.env.AWS_REGION, // AWS Region from .env
});

// Route to generate a signed URL

app.get("/s3-presigned-url", async (req, res) => {
  const s3Parms = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.query.filename,
    Expires: 60 * 60,
    ContentType: req.query.mimetype,
  };

  const url = await s3.getSignedUrl("putObject", s3Parms);
  console.log("hey url is", url);

  res.json({ url });
});
app.get("/s3-url", (req, res) => {
  const { fileName, fileType } = req.query;

  if (!fileName || !fileType) {
    return res.status(400).json({ error: "File name and type are required" });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME, // S3 Bucket name from .env
    Key: fileName, // File name to save in S3
    ContentType: fileType, // File type (e.g., image/jpeg)
    Expires: 300, // URL expires in 60 seconds
  };

  s3.getSignedUrl("putObject", params, (err, url) => {
    if (err) {
      console.log("getting error", err);

      console.error("Error generating signed URL:", err);
      return res.status(500).json({ error: "Error generating signed URL" });
    }
    console.log("signed url", url);

    return res.json({ url }); // Return the signed URL to the frontend
  });
});

app.get("/test", (req, res) => {
  res.status(201).send("welcome");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
