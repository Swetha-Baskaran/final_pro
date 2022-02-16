import React from 'react';
import Testimonial from "./testimonial"
import About from './About';
import Notice from "./notice"
import Vision from './vision';
import HodCard from "./hod_card";

const DeptLandingPage = () => {
  return (
  <div>
         <HodCard />
         <About />
         <Vision />
         <Notice />
         <Testimonial />
  </div>);
};

export default DeptLandingPage;
