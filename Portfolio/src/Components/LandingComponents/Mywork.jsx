import React from 'react'
import './Mywork.css'
function Mywork() {
  return (
    <>
    
    <section class="section">

  <h1 class="section-title">
    My <span>Work Experience</span>
  </h1>

  <div class="timeline">

    {/* <!-- ROW 1 --> */}
    <div class="timeline-row">
      <div class="left">
        <h2>Cognizant, Mumbai</h2>
        <p>Sep 2016- July 2020</p>
      </div>

      <div class="circle-wrapper">
        <div class="outer">
          <div class="inner"></div>
        </div>
      </div>

      <div class="right">
        <h2>Experience Designer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis lacus nunc, posuere in justo vulputate, bibendum sodales</p>
      </div>
    </div>

    {/* <!-- ROW 2 --> */}
    <div class="timeline-row">
      <div class="left">
        <h2>Sugee Pvt limited, Mumbai</h2>
        <p>Sep 2020- July 2023</p>
      </div>

      <div class="circle-wrapper">
        <div class="outer">
          <div class="inner dark"></div>
        </div>
      </div>

      <div class="right">
        <h2>UI/UX Designer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis lacus nunc, posuere in justo vulputate, bibendum sodales</p>
      </div>
    </div>

    {/* <!-- ROW 3 --> */}
    <div class="timeline-row">
      <div class="left">
        <h2>Cinetstox, Mumbai</h2>
        <p>Sep 2023</p>
      </div>

      <div class="circle-wrapper">
        <div class="outer">
          <div class="inner"></div>
        </div>
      </div>

      <div class="right">
        <h2>Lead UX Designer</h2>
      </div>
    </div>

  </div>

</section>

    
    </>
  )
}

export default Mywork