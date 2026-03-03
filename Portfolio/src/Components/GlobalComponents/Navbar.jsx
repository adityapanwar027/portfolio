// components/Navbar.jsx
import React, { useState } from "react";
import Logo from "./Logo"; // Adjust the import path based on your project structure

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/lufga');

        .navbar {
          position: fixed;
          top: 30px;
          left: 0;
          background: transparent;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .navbar-container {
          background: #000000;
          border-radius: 60px;
          padding: 9px 9px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: auto;
          min-width: 1100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-left, .nav-right {
          display: flex;
          align-items: center;
          gap: 4px; /* Equal small gap between items */
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          display: inline-block;
        }

        .nav-link {
          text-decoration: none;
          font-family: 'Lufga';
          font-weight: 200; /* Lighter font weight */
          font-size: 18px;
          line-height: 100%;
          letter-spacing: -1.5%;
          color: #FFFFFF;
          transition: all 0.2s ease;
          white-space: nowrap;
          padding: 12px 24px; /* Equal padding for all buttons */
          border-radius: 40px;
          display: inline-block;
          background: transparent;
        }

        /* Simple orange button hover - text stays white */
        .nav-link:hover {
          background: rgb(75, 75, 75);
          color: #FFFFFF; /* Text remains white */
        }

        /* Active link styling - also orange but maybe slightly different */
        .nav-link.active {
          background: rgba(253, 133, 58, 1);
          color: #FFFFFF;
        }

        /* Logo wrapper - to ensure proper spacing */
        .navbar-logo-wrapper {
          display: flex;
          align-items: center;
          margin: 0 40px; /* Equal margin on both sides */
        }

        /* Override Logo component styles to fit navbar */
        .navbar-logo-wrapper .logo-container {
          gap: 8px;
        }

        .navbar-logo-wrapper .text-container {
          width: 125px;
          height: 28px;
        }

        .navbar-logo-wrapper .logo-icon {
          height: 28px;
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .navbar-container {
            min-width: 90%;
            padding: 10px 20px;
          }
          
          .nav-left, .nav-right {
            gap: 2px;
          }
          
          .nav-link {
            padding: 10px 20px;
            font-size: 16px;
          }
          
          .navbar-logo-wrapper {
            margin: 0 20px;
          }
        }

        /* Remove any extra effects */
        .nav-link:active {
          transform: none;
        }
        
        .nav-link::after {
          display: none;
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          {/* Left navigation */}
          <ul className="nav-left">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink("Home");
                  document
                    .querySelector("#home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${activeLink === "About" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink("About");
                  document
                    .querySelector("")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#service"
                className={`nav-link ${activeLink === "Service" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink("Service");
                  document
                    .querySelector("#service")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Service
              </a>
            </li>
          </ul>

          {/* Logo */}
          <div className="navbar-logo-wrapper">
            <Logo />
          </div>

          {/* Right navigation */}
          <ul className="nav-right">
            <li className="nav-item">
              <a
                href="#resume"
                className={`nav-link ${activeLink === "Resume" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink("Resume");
                  document
                    .querySelector("#resume")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#project"
                className={`nav-link ${activeLink === "Project" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink("Project");
                  document
                    .querySelector("#project")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${activeLink === "Contact" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink("Contact");
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
