import React from "react";

import a1 from "../../images/a1.jpg"
import a2 from "../../images/a2.jpg"
import a3 from "../../images/a3.jpg"
import a4 from "../../images/a4.jpg"
import a5 from "../../images/a5.jpg"
import a6 from "../../images/a6.jpg"
import a7 from "../../images/a7.jpg"


let details = [
    {
        img: a1,
        name: "Sridhar",
    },
    {
        img: a2,
        name: "Arun kumar",
    },
    {
        img: a3,
        name: "Sai Vamsi",
    },
    {
        img: a4,
        name: "Anand P",
    },
    {
        img: a5,
        name: "Ritesh",
    },
    {
        img: a6,
        name: "Tharun",
    },
    {
        img: a7,
        name: "Hanthika G",
    },
    {
        img: a1,
        name: "Sridhar",
    },
    {
        img: a3,
        name: "Sai Vamsi",
    },
    {
        img: a6,
        name: "Sai Vamsi",
    },
    {
        img: a5,
        name: "Sai Vamsi",
    },
    {
        img: a7,
        name: "Hanthika G",
    },
]

import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram } from "../../../node_modules/react-icons/ti"

export default function Alumini(){
    return(
        <div className="alumini-hold block md:grid md:grid-cols-2 gap-6 p-20">
            {
                details.map((e)=> {
                    return(
                        <div className="alumini-box col-span-1 flex justify-between m-10">
                           <div className="alumini-parts block">
                              <div><h5 className="text-left text-4xl py-5">{e.name}</h5></div>
                              <div className="text-left">Sridhar is our alumini of 2004 batch. He is now a CEO of Blue tech private limited. He completed his B.Tech in our department and done his masters in Harvard University in Data Science.</div>
                              <ol className="flex justify-evenly pt-5">
                                  <li><TiSocialFacebook className="text-5xl" /></li>
                                  <li><TiSocialLinkedin className="text-5xl"/></li>
                                  <li><TiSocialTwitter className="text-5xl"/></li>
                                  <li><TiSocialInstagram className="text-5xl"/></li>
                              </ol>
                           </div>
                           <div className="alumini-parts">
                               <img src={e.img} alt="alumini1" className="alumini-img" />
                           </div>
                        </div>
                    )
                })
            }
        </div>
    )
} 