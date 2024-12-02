import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [mode, setMode] = useState("password"); // 'password' or 'otp'
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const switchMode = (newMode) => {
    setMode(newMode);
    resetForm();
  };

  const resetForm = () => {
    setUserId("");
    setPassword("");
    setPhoneNumber("");
    setOtp("");
    setOtpSent(false);
  };

  const handleLogin = () => {
    if (mode === "password") {
      if (!userId || !password) {
        toast.error("User ID and Password are required!");
        return;
      }
      toast.success("Logged in successfully!");
    } else if (mode === "otp") {
      if (!phoneNumber) {
        toast.error("Phone number is required!");
        return;
      }
      if (otpSent && !otp) {
        toast.error("Please enter the OTP!");
        return;
      }
      otpSent ? toast.success("Logged in successfully!") : setOtpSent(true);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <motion.div
        className="login-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="title">Welcome Back!</h1>
        <div className="switch-buttons">
          <button
            className={`switch-btn ${mode === "password" ? "active" : ""}`}
            onClick={() => switchMode("password")}
          >
            Login with Password
          </button>
          <button
            className={`switch-btn ${mode === "otp" ? "active" : ""}`}
            onClick={() => switchMode("otp")}
          >
            Login with OTP
          </button>
        </div>

        {mode === "password" && (
          <motion.div
            key="password-login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="form"
          >
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>
        )}

        {mode === "otp" && (
          <motion.div
            key="otp-login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="form"
          >
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {otpSent && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
          </motion.div>
        )}

        <button className="login-btn" onClick={handleLogin}>
          {otpSent ? "Verify OTP" : "Login"}
        </button>
      </motion.div>
    </div>
  );
};

export default LoginPage;
