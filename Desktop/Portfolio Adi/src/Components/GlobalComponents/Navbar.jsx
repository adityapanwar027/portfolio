
import './Navbar.css'
import { useState } from 'react';
import Logo from "../GlobalComponents/Logo"
const Navbar = () => {
   const [activeLink, setActiveLink] = useState("Home");

  return (
    <>


      <nav className="navbar">
        <div className="navbar-container">
          


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

          
          <div className="navbar-logo-wrapper">
            <Logo />
          </div>


          
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
      {/* 
       <nav class="navbar">
        <div class="navbar-container">

         
          <ul class="nav-left">
            <li class="nav-item">
              <a href="#home" class="nav-link active">Home</a>
            </li>

            <li class="nav-item">
              <a href="#about" class="nav-link">About</a>
            </li>

            <li class="nav-item">
              <a href="#service" class="nav-link">Service</a>
            </li>
          </ul>

<div className="navbar-logo-wrapper">
  <img
    src={logoDefault}
    alt="Logo"
    className="navbar-logo-img navbar-logo-default"
  />
  <img
    src={logoVariant2}
    alt="Logo Hover"
    className="navbar-logo-img navbar-logo-variant"
  />
</div>

   
          <ul class="nav-right">
            <li class="nav-item">
              <a href="#resume" class="nav-link">Resume</a>
            </li>

            <li class="nav-item">
              <a href="#project" class="nav-link">Project</a>
            </li>

            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
          </ul>

        </div>
      </nav>  */}
    </>
  );
};

export default Navbar;
