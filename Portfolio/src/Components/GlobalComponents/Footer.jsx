import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Heading */}
        <div className="footer-top">
          <h1>Lets Connect there</h1>
          <button className="hire-btn">
            Hire me <span><img src="/src/assets/up right.svg" alt="" /></span>
          </button>
        </div>

        <div className="divider"></div>

        {/* Middle Section */}
        <div className="footer-middle">

          {/* Column 1 */}
          <div className="footer-col about">
            <div className="logo">
              <div className="logo-circle"><img src="/src/assets/Frame 55 copy.svg" alt="" /></div>
              <span>JCREA</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>

            <div className="social-icons">
              <img src="/src/assets/facebook.svg" alt="" />
              <img src="/src/assets/youtube.svg" alt="" />
              <img src="/src/assets/whatsapp.svg" alt="" />
              <img src="/src/assets/instagram.svg" alt="" />
              <img src="/src/assets/Union.svg" alt="" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Resume</li>
              <li>Project</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>+20 11 43 63 73 41</li>
              <li>fawzisayed1209@gmail.com</li>
              <li>fawziuiux.com</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col newsletter">
            <h3>Get the latest information</h3>
            <div className="email-box">
              <input type="email" placeholder="Email Address" />
              <button><img src="/src/assets/send.svg" alt="" /></button>
            </div>
          </div>

        </div>

        <div className="divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>Copyright© 2023 Fawziuiux. All Rights Reserved.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
