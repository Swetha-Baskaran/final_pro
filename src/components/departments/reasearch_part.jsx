import React from "react";

import img from "../../images/cse.jpg"
import "./research_style.css"

export default function Research(){
    return(
        
    <div class="containerr p-10">
       {
           [1,1,1,1,1,1,1,1,1].map(()=>{
               return(
                   <div className="block lg:grid grid-cols-2 gap-7">
                       <div class="boxx flex">
                          <div className="p-10">
                            <h2>01</h2>
                            <h3>Research 1</h3>
                            <p className="R-para p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore laborum, porro voluptatem temporibus, perspiciatis, eligendi molestiae eveniet nesciunt sunt officia rerum eaque.</p>
                          </div>
                          <div className="imgg" style={{"background" : `url(${img})`}}>
                           
                          </div>
                        </div>
                        <div class="boxx flex">
                          <div className="p-10">
                            <h2>01</h2>
                            <h3>Research 1</h3>
                            <p className="R-para p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore laborum, porro voluptatem temporibus, perspiciatis, eligendi molestiae eveniet nesciunt sunt officia rerum eaque.</p>
                          </div>
                          <div className="imgg" style={{"background" : `url(${img})`}}>
                           
                          </div>
                        </div>
                   </div>
               )
           })
       }
    </div>

    )
}