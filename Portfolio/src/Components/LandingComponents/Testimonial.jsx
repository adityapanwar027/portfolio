import React from 'react'
import './Testimonial.css'
function Testimonial() {
  return (
    <>
    
 <section className="testimonials-section">
      <div className="ts-container">
        <div className="ts-header">
          <h2>
            Testimonials That <br />
            Speak to <span>My Results</span>
          </h2>
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius exercitationem quidem iure at, voluptates saepe similique! Ipsa, cupiditate explicabo, quae asperiores iure ratione quis qui tempore, omnis in at cumque!
          </p>
        </div>

        <div className="ts-slider">
          <div className="ts-cards">
            {/* Original 3 cards */}
            <div className="ts-card">
              <div className="ts-user">
                <img src="https://i.pravatar.cc/80?img=12" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">★ ★ ★ ★ ★ <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="https://i.pravatar.cc/80?img=15" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">★ ★ ★ ★ ★ <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="https://i.pravatar.cc/80?img=18" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">★ ★ ★ ★ ★ <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>

            {/* Duplicate same 3 cards for infinite scroll */}
            <div className="ts-card">
              <div className="ts-user">
                <img src="https://i.pravatar.cc/80?img=12" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">★ ★ ★ ★ ★ <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="https://i.pravatar.cc/80?img=15" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">★ ★ ★ ★ ★ <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="https://i.pravatar.cc/80?img=18" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">★ ★ ★ ★ ★ <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
  
}

export default Testimonial
