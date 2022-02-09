import React from 'react';
import Gallery from "./gallery"
import Testimonial from "./testimonial"
// import NewsPTU from "../home/news/NewsPTU"
import HodCard from "./hod_card"
// <<<<<<< HEAD
import { Link } from "react-router-dom";
// =======
import About from './About';
import Faculty from './Faculty';
import Notice from "./notice"
import Vision from './vision';

const DeptLandingPage = () => {
  return (<div>
      <Link to="/cse/about">
         <HodCard />
      </Link>
      <About />
      <Vision />
      <Notice />
      <Faculty />
      <Testimonial />
  </div>);
};

export default DeptLandingPage;
