// src/Pages/HomePage.jsx

import React from 'react';

import FootPrint from "../Components/LandingPage/FootPrint";
import Testimonials from "../Components/LandingPage/Testimonials";
import Partners_logo from "../Components/LandingPage/Partners_logo";
import ServiceSection from "../Components/LandingPage/ServiceSection";
import EhmBrief from "../Components/LandingPage/EhmBrief";
import Resource from "../Components/LandingPage/Resource";
import HeroSection2 from '../Components/LandingPage/HeroSection2';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#ededed]">
      <HeroSection2 />
      {/*<Hero/>*/}  
      {/* <HeroSection /> */}

      {/* About EHM */}
      <EhmBrief />

      {/* Offerings */}
      <ServiceSection />

      {/* Completed Projects / Logo Scroll */}
      {/*<LogoScroll />*/}

      {/* Partners logo moved below Testimonials */}
      {/*<Partners_logo />*/}
      
      {/*<Testimonials />*/}



      {/* Resources and Footprint sections */}
      {/*<Resource />*/}
      {/* <FootPrint /> */}

      {/* ✅ Testimonials now come before Partners */}
      
    </div>
  );
};

export default HomePage;
