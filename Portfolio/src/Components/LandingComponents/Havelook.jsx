import React from 'react'
import './Havelook.css'
function Havelook() {
  return (
   <>
    <section className="portfolio-sec">
      <div className="portfolio-container">

        {/* Top Heading */}
        <div className="portfolio-top">
          <h1 className="portfolio-title">
            Lets have a look at <br />
            my <span>Portfolio</span>
          </h1>

          <button className="portfolio-seeall">See All</button>
        </div>

        {/* Slider Images */}
        <div className="portfolio-slider">
          <div className="portfolio-card">
            <img src="/src/assets/look.png" alt="project" />
            {/* Arrow Button */}
            <button className="portfolio-card-arrow">→</button>
            <div className="portfolio-card-overlay">
              <h2>Lirante</h2>
            </div>

          </div>

          <div className="portfolio-card">
            <img src="/src/assets/look.png" alt="project" />
            <button className="portfolio-card-arrow">→</button>
            <div className="portfolio-card-overlay">
              <h2>Lirante</h2>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="portfolio-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Categories */}
        <div className="portfolio-tags">
          <span>Landing Page</span>
          <span>Product Design</span>
          <span>Animation</span>
          <span>Glassmorphism</span>
          <span>Cards</span>
        </div>

        {/* Bottom Content */}
        <div className="portfolio-bottom">
          <h2>
            Lirante - Food Dilvery Solution
            <span className="portfolio-arrow">↗</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

      </div>
    </section>
   
   
   </>
  )
}

export default Havelook