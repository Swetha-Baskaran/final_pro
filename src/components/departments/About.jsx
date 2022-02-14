import React, { useEffect, useState } from 'react';

import img from "../../images/cse.jpg"

let arr = [
  {
    name: "B.Tech students",
    count: 481,
  },
  {
    name: "B.Tech students",
    count: 41,
  },{
    name: "B.Tech students",
    count: 481,
  },{
    name: "B.Tech students",
    count: 81,
  },{
    name: "B.Tech students",
    count: 481,
  },{
    name: "B.Tech students",
    count: 481,
  },

]



const About = () => {

  let [state, setState] = useState(0)
  
  // setTimeout(() => {
  //      setState(e => e+1)
  // }, 3000);
  


  return <div>
    <div className="cse-hold hw1 block md:flex md:justify-evenly px-20 pt-10 mt-20">
        <div>
           <div className="explore text-left">Explore the</div>
           <div className="dept-title text-left">CSE Department</div>
        </div>
        <div className="title_of-dept">
            <div className="numbers grid grid-cols-3 gap-14">

             {
               arr.map((e, index)=>{
                 return (
                  <p className='col-span-1'>
                    <h5 className="numberse_here">{state}</h5>
                    <div className='numbers_name'>
                      <h3 className="name_here text-4xl text-center">B.Tech students</h3>
                    </div>
                </p>
                 )
               })
             }
              
            </div>
        </div>
   </div>

        <div className="hw2 p-10 mx-20 my-10">
          <br />
          <h5 className="dep-h text-4xl">About the Department</h5>
          <p className="dep-p py-10">
          The Department of Economics was established in 1986. Over the last thirty two years, the Department has carved out a niche in economics education map of India. The Department discharges three functions, namely teaching, research and extension. So far, it has produced a large number of post-graduates, as well as M.Phil. and Ph.D. scholars who are placed in some of the premier institutions in the country and elsewhere. The Department has also emerged as a popular centre for training officials from government and corporate sectors, especially in the area of econometrics.
          </p>
          <div className="d-btn-hold text-left">
             <button className="d-read px-5 py-2 text-white ">
               Download Overview
             </button>
          </div>
        </div>

         </div>;
};

export default About;
