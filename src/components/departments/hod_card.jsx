import React from "react";

import "../head_sec/small_carousel/smallCarousel.css"

import img from '../../images/ZayarazG.png'

export default function HodCard (){
    return (
        <div className="card-cont flex align-center">
            <div className="small-cont hod-card flex">
          <div className="parts">
              <img src={img} alt="" />
          </div>
          <div className="parts">
              <h4>Dr. G. Zayaraz</h4>
              <h6>Hod cse department</h6>
              <p>Welcome to the department of computer science and technology. Here we will explore  This is the message by cse hod.</p>
          </div>
        </div>
            </div>
    )
}