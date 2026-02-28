import React from 'react'
import './LandingPage.css'
import Mywork from '../Components/LandingComponents/Mywork'
import Hireme from '../Components/LandingComponents/Hireme'
import Discuss from '../Components/LandingComponents/Discuss'

function LandingPage() {
  return (
    <div className="landing-layout">
      <Mywork />
      <Hireme />
      <Discuss />
    </div>
  )
}

export default LandingPage
