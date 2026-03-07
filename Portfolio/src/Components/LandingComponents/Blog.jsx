import React from 'react'
import './Blog.css'
function Blog() {
  return (
<>

{/* header */}
<section className="blogHeaderSection">
      <div className="blogHeaderContainer">

        <div className="blogHeaderLeft">
          <h1>
            From my <br />
            blog post
          </h1>
        </div>

        <div className="blogHeaderRight">
          <button className="blogSeeBtn">See All</button>
        </div>

      </div>
    </section>
  {/* card section */}

    <div className="main">
    {/* 1 */}
    <div class="card1">
    <div class="shape"></div>
    <div class="zoom"></div>
    </div>
     {/* 2 */}
    <div class="card2">
    <div class="shape"></div>
    <div class="zoom"></div>
    </div>
     {/* 3 */}
    <div class="card3">
    <div class="shape"></div>
    <div class="zoom"></div>
    </div>
    </div> 

    {/* // section 2 of blog post */}
<section className="blogSec">
      <div className="blogWrapper">

       {/* bottom 1 */}
        <div className="blogItem">
          <div className="blogTag">UI/ UX Design</div>

          <div className="blogInfo">
            <span className="blogDot"></span>
            <span className="blogAuthor">Jayesh Patil</span>

            <span className="blogDot"></span>
            <span className="blogDate">10 Nov, 2023</span>
          </div>

          <h2 className="blogHeading">
            Design Unraveled: Behind the Scenes of UI/UX Magic
          </h2>
        </div>

     {/* bottom 2 */}
        <div className="blogItem">
          <div className="blogTag">App Design</div>

          <div className="blogInfo">
            <span className="blogDot"></span>
            <span className="blogAuthor">Jayesh Patil</span>

            <span className="blogDot"></span>
            <span className="blogDate">09 Oct, 2023</span>
          </div>

          <h2 className="blogHeading">
            Sugee: Loan Management System for Rural Sector.
          </h2>
        </div>

       {/* bottom 3 */}
        <div className="blogItem">
          <div className="blogTag">App Design</div>

          <div className="blogInfo">
            <span className="blogDot"></span>
            <span className="blogAuthor">Jayesh Patil</span>

            <span className="blogDot"></span>
            <span className="blogDate">13 Aug, 2023</span>
          </div>

          <h2 className="blogHeading">
            Cinetrade: Innovative way to invest in Digital Media
          </h2>
        </div>

      </div>
    </section>
    </>
  )
}

export default Blog