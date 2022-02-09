import React from "react";

import A1 from "../../images/chemical.jpg"

export default function Alumini(){
    return(
        <div className="alumini-hold grid grid-cols-2 gap-6 p-20">
            {
                [1,2,3,4,5,6,7,8,9,10].map(()=> {
                    return(
                        <div className="alumini-box col-span-1 flex justify-between m-10">
                           <div className="alumini-parts block">
                              <div><h5 className="text-left text-4xl py-5">Alumini name</h5></div>
                              <div className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe sint harum totam quae. Ut qui, quas corporis id repellat fugit cum amet in sed dolor magnam, unde dignissimos animi!</div>
                              <ol className="flex justify-evenly pt-5">
                                  <li>f</li>
                                  <li>in</li>
                                  <li>i</li>
                                  <li>t</li>
                              </ol>
                           </div>
                           <div className="alumini-parts">
                               <img src={A1} alt="alumini1" className="alumini-img" />
                           </div>
                        </div>
                    )
                })
            }
        </div>
    )
} 