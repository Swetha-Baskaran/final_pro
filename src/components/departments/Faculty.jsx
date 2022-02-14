import React, { useState } from 'react';

import facImg from "../../images/ZayarazG.png"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"
import img6 from "../../images/img6.jpg"
import img7 from "../../images/img7.jpg"
import img8 from "../../images/img8.jpg"

let facultyData = [
    {
        name: "Dr. G.Zayaraz",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: facImg,
        Subject: "Software Architecture, Information Security",
        messege: "gzayaraz@pec.edu",
        number : 9443958140
    },{
        name: "Dr.D.Loganathan, M.Sc.(Tech.), Ph. D",
        img: img6,
        Subject: "Database Systems, Graphics, Automata & Management",
        messege: "drloganathan@pec.edu",
        number : 9486018682
    },{
        name: "Dr. K. Vivekanandan, B. E., M. Tech.,Ph.D.",
        img: img2,
        Subject: "Software Engineering, Agile Programming",
        messege: "k.vivekanandan@pec.edu",
        number : 9443777795
    },{
        name: "Dr.E. Ilavarasan, M.Tech., Ph. D",
        img: img7,
        Subject: "Distributed Systems, Microprocessors",
        messege: "eilavarasan@pec.edu",
        number :  9443084714
    },{
        name: "Dr. Ka. Selvaradjou, M.Tech., Ph.D.,",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img3,
        Subject: " Microprocessors, Computer Hardware & Sensor Networks",
        messege: "selvaraj@pec.edu",
        number : 9444684258
    },{
        name: "Dr.E. Ilavarasan, M.Tech., Ph. D",
        img: img7,
        Subject: "Distributed Systems, Microprocessors & Microcontrollers and Data Mining",
        messege: "eilavarasan@pec.edu",
        number : 9443084714
    },{
        name: "Dr.D.Loganathan, M.Sc.(Tech.), Ph. D",
        img: img6,
        Subject: "Image Processing ,Information Security",
        messege: "drloganathan@pec.edu",
        number : 9486018682
    },{
        name: "Dr. M. Sugumaran, M.Sc.,M.Phil.,M.Tech.,Ph.d",
        img: img4,
        Subject: "Algorithms, Theoretical ComputerScience, Computer Networks",
        messege: "sugu@pec.edu",
        number : 9488829865
    },
    
    
]

export default function Faculty(){
     return (
         <>
           <Faculty_single Fname="Professors" />
           <Faculty_single Fname="Associate professors" />
           <Faculty_single Fname="Assistant professors" />
         </>
     ) 
}


function Faculty_single({ Fname }){
    let [state, setState] = useState(0)

    let name = facultyData[state].name  
    let sub = facultyData[state].Subject  
    let msg = facultyData[state].messege 
    let number = facultyData[state].number 
    let image = facultyData[state].img

    return(
        <>
        <div className='faculty block md:grid md:grid-cols-7 py-20'>
            <div className="big col-span-4">
                <div className='our-fac'>{ Fname }</div>
                <div className="big-in fac-info flex">
                   <div className="big-img">
                      <img src={image} alt="" />
                   </div>  
                   <div className="big-cont">
                       <p>Name : {name}</p>   
                       <p>Specialization : {sub}</p>   
                       <p>Phone : {number}</p>   
                       <p>Email : {msg}</p>  
                          <br />
                       <p className='underline'>see complete profile</p>   
                    </div>       
                </div>
            </div>
            <div className="small block col-span-3 mx-10">
             {
                 facultyData.map( (e, index) =>{
                     return (
                         <div className="small-cards flex justify-left px-10 py-5" onClick={()=>{setState(index)}}>
                             <div className="parts1">
                                 <img  className="faculty-img" src={e.img} alt="" />
                             </div>
                             <div className="parts2 px-5">
                                 <h5 className='text-bold'>{e.name}</h5>
                                 <h6>{e.Subject}</h6>
                             </div>
                         </div>
                     )
                    })   
                }
            </div>
        </div>
                </>
    )
}