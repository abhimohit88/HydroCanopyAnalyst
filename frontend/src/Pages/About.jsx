import React from "react";
import AboutBoardOfDirectors from "../Components/About/AboutBoardOfDirectors";
import AboutHero from "../Components/About/AboutHero";
import AboutMentorsAdvisors from "../Components/About/AboutMentorsAdvisors";
import AboutPhilosophy from "../Components/About/AboutPhilosophy";
import AboutSystems from "../Components/About/AboutSystems";
import AboutResilience from "../Components/About/AboutResilience";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutPhilosophy />
      <AboutSystems />
      <AboutBoardOfDirectors />
      <AboutMentorsAdvisors />
      <AboutResilience />
    </div>
  );
};

export default About