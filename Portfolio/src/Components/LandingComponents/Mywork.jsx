import React from "react";
import "./Mywork.css";

function Mywork() {
  return (
    // Top Heading
    <section class="mywork-root">
      <div class="mywork-section">
        <h1 class="mywork-title">
          My <span>Work Experience</span>
        </h1>

        <div class="mywork-timeline">
          {/* <!-- Row 1 --> */}
          <div class="mywork-row">
            <div class="mywork-left">
              <h2>Cognizant, Mumbai</h2>
              <p>Sep 2016 - July 2020</p>
            </div>

            <div class="mywork-circle-wrapper">
              <div class="mywork-circle-outer">
                <div class="mywork-circle-inner"></div>
              </div>
            </div>

            <div class="mywork-right">
              <h2>Experience Designer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales
              </p>
            </div>
          </div>

          {/* <!-- Row 2 --> */}
          <div class="mywork-row">
            <div class="mywork-left">
              <h2>Sugee Pvt Limited, Mumbai</h2>
              <p>Sep 2020 - July 2023</p>
            </div>

            <div class="mywork-circle-wrapper">
              <div class="mywork-circle-outer dark">
                <div class="mywork-circle-inner"></div>
              </div>
            </div>

            <div class="mywork-right">
              <h2>UI/UX Designer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                lacus nunc, posuere in justo vulputate, bibendum sodales
              </p>
            </div>
          </div>

          {/* <!-- Row 3 --> */}
          <div class="mywork-row">
            <div class="mywork-left">
              <h2>Cinetstox, Mumbai</h2>
              <p>Sep 2023</p>
            </div>

            <div class="mywork-circle-wrapper">
              <div class="mywork-circle-outer">
                <div class="mywork-circle-inner"></div>
              </div>
            </div>

            <div class="mywork-right">
              <h2>Lead UX Designer</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mywork;
