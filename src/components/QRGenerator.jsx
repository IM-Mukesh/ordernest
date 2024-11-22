import React from "react";
import QRCode from "react-qr-code";
const QRGenerator = () => {
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"https://biteheaven.netlify.app/"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QRGenerator;
