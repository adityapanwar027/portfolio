import React, { useState } from "react";
import './Hero.css'
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
