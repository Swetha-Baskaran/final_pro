import React from 'react';

import img from "../../images/cse.jpg"


const About = () => {
  return <div>
    <div className="hw1 flex justify-evenly px-20 pt-10">
        <div>
           <div className="explore text-left">Explore the</div>
           <div className="dept-title text-left">CSE Department</div>
        </div>
        <div className="title_of-dept">
            <div className="numbers grid grid-cols-3 gap-24">
              <p className='col-span-1'>
                <h5 className="numberse_here">481</h5>
                <div className='numbers_name'>
                <h3 className="name_here text-4xl text-center">B.Tech students</h3>
                </div>
              </p>
              
              <p className='col-span-1'>
                <h5 className="numberse_here">20</h5>
                <div className='numbers_name'>
                <h3 className="name_here text-4xl text-center">M.Tech <br />Data Science</h3>
                </div>
              </p>

              <p className='col-span-1'>
                <h5 className="numberse_here">19</h5>
                <div className='numbers_name'>
                <h3 className="name_here text-4xl text-center">M.Tech <br />Information Secutiy</h3>
                </div>
              </p>
              
              <p className='col-span-1'>
                <h5 className="numberse_here">84</h5>
                <div className='numbers_name'>
                <h3 className="name_here text-4xl text-center">MCA students</h3>
                </div>
              </p>
              
              <p className='col-span-1'>
                <h5 className="numberse_here">85</h5>
                <div className='numbers_name'>
                <h3 className="name_here text-4xl text-center">Ph.D students</h3>
                </div>
              </p>

              <p className='col-span-1'>
                <h5 className="numberse_here">24</h5>
                <div className='numbers_name'>
                <h3 className="name_here text-4xl text-center">Faculty</h3>
                </div>
              </p>
              
            </div>
    </div>

        </div>
        <div className="hw2 p-10 mx-20">
          <br />
          <h5 className="dep-h text-4xl">About the Department</h5>
          <p className="dep-p">
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
