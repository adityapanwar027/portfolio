import React, { useState } from "react";
import Eclipse2 from "/Frames/Ellipse 2.svg";
import Frame4 from "/Frames/Frame 4.svg";
import Frame3 from "/Frames/Frame 3.svg";
import Frame4Left from "/Frames/Frame 4 (1).svg";
import Doodle from "/Frames/Frame 68 (1).svg";

const girlImage =
  "/Frames/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.png";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
  .hero-section {
    width: 100%;
    min-height: 100vh;
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .eclipse {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 740px;
    height: auto;
    max-width: none;
    z-index: 1;
  }

  .girl {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 860px;
    z-index: 4;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .girl:hover {
    transform: translateX(-50%) scale(1.02);
  }

  /* Left side text */
  .frame4-left {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 320px;
    z-index: 2;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .frame4-left.hovered {
    transform: translateY(-200%);
  }

  /* Right side text */
  .frame3 {
    position: absolute;
    right: 5%;
    top: 55%;
    transform: translateY(-50%);
    width: 280px;
    z-index: 2;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .frame3.hovered {
    transform: translateY(-150%);
  }

  /* Center text that disappears */
  .frame4 {
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    width: 650px;
    z-index: 2;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
  }

  .frame4.hovered {
    transform: translateX(-50%) translateY(150px);
    opacity: 0;
  }

  /* Frame 56 Button */
  .frame56-button {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px; /* Adjust based on your button size */
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
    transform: translateX(-50%) scale(0.1);
    width: 860px;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .doodle.visible {
    opacity: 1;
    transform: translateX(-50%) scale(1.2);
    z-index: 3;
    animation: singlePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  @keyframes singlePop {
    0% {
      transform: translateX(-50%) scale(0.1);
      opacity: 0;
    }
    60% {
      transform: translateX(-50%) scale(1.3);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) scale(1.2);
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
`}</style>

      <div className="hero-section">
        <img src={Eclipse2} alt="Eclipse background" className="eclipse" />

        {/* Left side text */}
        <img
          src={Frame4Left}
          alt="Left side text"
          className={`frame4-left ${isHovered ? "hovered" : ""}`}
        />

        {/* Right side text */}
        <img
          src={Frame3}
          alt="Right side text"
          className={`frame3 ${isHovered ? "hovered" : ""}`}
        />

        {/* Girl image */}
        <img
          src={girlImage}
          alt="Girl"
          className="girl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        {/* Center text that disappears on hover */}
        <img
          src={Frame4}
          alt="Design elements"
          className={`frame4 ${isHovered ? "hovered" : ""}`}
        />

        {/* Doodle that appears on hover */}
        <img
          src={Doodle}
          alt="Doodle design"
          className={`doodle ${isHovered ? "visible" : ""}`}
        />
      </div>
    </>
  );
};

export default Hero;
