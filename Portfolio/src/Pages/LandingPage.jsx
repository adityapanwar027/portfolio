import React from "react";
import Hero from "../Components/LandingComponents/Hero";
import Mywork from "../Components/LandingComponents/Mywork";
import Hireme from "../Components/LandingComponents/Hireme";
import Discuss from "../Components/LandingComponents/Discuss";
import Slider from "../Components/LandingComponents/Slider";
function LandingPage() {
  return (
    <div>
      <Hero />
      <Mywork />
      <Hireme />
      <Discuss />
      <Slider />
    </div>
  );
}

export default LandingPage;
