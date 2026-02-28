import React from 'react'
import './LandingPage.css'
import Mywork from '../Components/LandingComponents/Mywork'
import Hireme from '../Components/LandingComponents/Hireme'
import Discuss from '../Components/LandingComponents/Discuss'
import Slider from '../Components/LandingComponents/Slider'

function LandingPage() {
  return (

    <div className="landing-layout">

      <Mywork />
      <Hireme />
      <Discuss /> 
      <Slider></Slider>

    </div>

  )
}

export default LandingPage
