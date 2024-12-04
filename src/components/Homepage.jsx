import React from "react";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">OrderNest</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button className="get-started">Get Started</button>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to OrderNest</h1>
          <p>
            Are BKL jaldi jaldi kaam kar le nahi to lund complete nahi ho raha
            15 Dec ke pehle
          </p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
            alt="Web design illustration"
          />
        </div>
      </section>

      <footer className="social-links">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </footer>
    </div>
  );
};

export default Homepage;
