import React from "react";
import Hero from "../Components/LandingComponents/Hero";
import Mywork from "../Components/LandingComponents/Mywork";
import Hireme from "../Components/LandingComponents/Hireme";
import Havelook from "../Components/LandingComponents/Havelook";
import Discuss from "../Components/LandingComponents/Discuss";
import Slider from "../Components/LandingComponents/Slider";
import Footer from '../Components/GlobalComponents/Footer'

function LandingPage() {
  return (
    <div>
      <Hero />
      <Mywork />
      <Hireme />
      <Havelook/>
      <Discuss />
      <Slider />
      <Footer/>
      
      
      
      
      
     
      
    </div>
  );
}

export default LandingPage;
