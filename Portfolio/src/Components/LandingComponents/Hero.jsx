import React, { useState } from "react";
import Eclipse2 from "/Frames/Ellipse 2.svg";
import Frame4 from "/Frames/Frame 4.svg";
import Frame3 from "/Frames/Frame 3.svg";
import Frame4Left from "/Frames/Frame 4 (1).svg";
import Doodle from "/Frames/Frame 68 (1).svg";
import Vector2 from "/Frames/Vector 2.svg";

const girlImage =
  "/Frames/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.png";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
  .hero-section {
    width: 100%;
    height: 80vh; /* Reduced from min-height: 100vh */
    min-height: 600px; /* Added min-height for smaller screens */
    background: #ffffff;
    position: relative;
    overflow: hidden;
    margin-top: 123px; /* Space for navbar */
  }

  .eclipse {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px; /* Further reduced from 666px */
    height: auto;
    max-width: none;
    z-index: 1;
  }

  .girl {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 700px; /* Further reduced from 774px */
    z-index: 4;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .girl:hover {
    transform: translateX(-50%) scale(1.02);
  }

  /* Left side text - testimonial */
  .frame4-left {
    position: absolute;
    left: 5%;
    top: 50%; /* Adjusted from 50% */
    transform: translateY(-50%);
    width: 350px; /* Further reduced from 288px */
    z-index: 2;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .frame4-left.hovered {
    transform: translateY(-170%); /* Adjusted from -200% */
  }

  /* Right side text - 10 years experience */
  .frame3 {
    position: absolute;
    right: 5%;
    top: 53%; /* Adjusted from 55% */
    transform: translateY(-50%);
    width: 230px; /* Further reduced from 252px */
    z-index: 2;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .frame3.hovered {
    transform: translateY(-160%); /* Adjusted from -150% */
  }

  /* Center text that disappears - "Hello! I'm Jenny, Product Designer" */
  .frame4 {
    position: absolute;
    top: 15px; /* Adjusted from 28px */
    left: 50%;
    transform: translateX(-50%);
    width: 600px; /* Further reduced from 585px */
    z-index: 2;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
  }

  .frame4.hovered {
    transform: translateX(-50%) translateY(100px); /* Adjusted from 135px */
    opacity: 0;
  }

  /* Frame 56 Button - "Hire me" button */
  .frame56-button {
    position: absolute;
    bottom: 15%; /* Adjusted from 18% */
    left: 50%;
    transform: translateX(-50%);
    width: 160px; /* Further reduced from 180px */
    z-index: 9;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .frame56-button:hover {
    transform: translateX(-50%) scale(1.05);
  }

  .doodle {
    position: absolute;
    bottom: 0;
    left: 49%;
    transform: translateX(-50%) scale(0.09);
    width: 840px; /* Further reduced from 774px */
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .doodle.visible {
    opacity: 1;
    transform: translateX(-50%) scale(0.95); /* Adjusted from 1.08 */
    z-index: 3;
    animation: singlePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  /* Vector 2 - positioned at bottom left of Frame 4 (Hello! I'm Jenny text) */
  .vector2 {
    position: absolute;
    bottom: 384px; /* Adjusted from 410px */
    left: 32%;
    width: 40px; /* Further reduced from 45px */
    height: auto;
    z-index: 5;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
  }

  .vector2.hovered {
    transform: translateY(100px); /* Adjusted from 135px */
    opacity: 0;
  }

  @keyframes singlePop {
    0% {
      transform: translateX(-50%) scale(0.09);
      opacity: 0;
    }
    60% {
      transform: translateX(-50%) scale(1.05); /* Adjusted from 1.17 */
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) scale(0.95);
      opacity: 1;
    }
  }

  /* Simple fade in for individual elements */
  .doodle.visible path,
  .doodle.visible circle,
  .doodle.visible rect {
    animation: simpleFadeIn 0.4s ease-out forwards;
    opacity: 0;
  }

  @keyframes simpleFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Staggered delays */
  .doodle.visible path:nth-child(1) { animation-delay: 0.1s; }
  .doodle.visible path:nth-child(2) { animation-delay: 0.15s; }
  .doodle.visible path:nth-child(3) { animation-delay: 0.2s; }
  .doodle.visible path:nth-child(4) { animation-delay: 0.25s; }
  .doodle.visible path:nth-child(5) { animation-delay: 0.3s; }
  .doodle.visible path:nth-child(6) { animation-delay: 0.35s; }
  .doodle.visible path:nth-child(7) { animation-delay: 0.4s; }
  .doodle.visible path:nth-child(8) { animation-delay: 0.45s; }
  .doodle.visible circle:nth-child(1) { animation-delay: 0.2s; }
  .doodle.visible circle:nth-child(2) { animation-delay: 0.3s; }
  .doodle.visible rect:nth-child(1) { animation-delay: 0.25s; }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    .hero-section {
      height: 70vh;
      min-height: 500px;
    }
    
    .girl {
      width: 500px;
    }
    
    .frame4 {
      width: 400px;
    }
    
    .frame4-left,
    .frame3 {
      width: 200px;
    }
  }
`}</style>

      <div className="hero-section">
        <img src={Eclipse2} alt="Eclipse background" className="eclipse" />

        {/* left side text - testimonial */}
        <img
          src={Frame4Left}
          alt="Left side text"
          className={`frame4-left ${isHovered ? "hovered" : ""}`}
        />

        {/* right side text - 10 years experience */}
        <img
          src={Frame3}
          alt="Right side text"
          className={`frame3 ${isHovered ? "hovered" : ""}`}
        />

        {/* girl image */}
        <img
          src={girlImage}
          alt="Girl"
          className="girl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        {/* center text that disappears on hover - "Hello! I'm Jenny, Product Designer" */}
        <img
          src={Frame4}
          alt="Hello! I'm Jenny, Product Designer"
          className={`frame4 ${isHovered ? "hovered" : ""}`}
        />

        {/* doodle that appears on hover */}
        <img
          src={Doodle}
          alt="Doodle design"
          className={`doodle ${isHovered ? "visible" : ""}`}
        />

        {/* Vector 2 - decorative element at bottom left of Frame 4 text */}
        <img
          src={Vector2}
          alt="Decorative vector"
          className={`vector2 ${isHovered ? "hovered" : ""}`}
        />
      </div>
    </>
  );
};

export default Hero;
