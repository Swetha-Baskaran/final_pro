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

import img9 from "../../images/img9.jpg"
import img10 from "../../images/img10.jpg"
import img11 from "../../images/img11.jpg"
import img12 from "../../images/img12.jpg"
import img13 from "../../images/img13.jpg"
import img14 from "../../images/img14.jpg"
import img15 from "../../images/img15.jpg"
import img16 from "../../images/img16.jpg"

import unknown from "../../images/Unknown_person.jpg"
// import unknown from "../../images/dont_.jfif"

//professors
let facultyData = [
    {
        name: "Dr. G.Zayaraz, B.Tech., M.Tech., Ph. D.,",
        img: facImg,
        Subject: "Software Architecture, Information Security",
        email: "gzayaraz@pec.edu",
        number : 9443958140
    },{
        name: "Dr.D.Loganathan, M.Sc.(Tech.), Ph. D",
        img: img6,
        Subject: "Database Systems, Graphics, Automata & Management",
        email: "drloganathan@pec.edu",
        number : 9486018682
    }
    ,{
        name: "Dr.N.Sreenath, M.Tech.,Ph.D.(IIT-M).,",
        img: img8,
        Subject: "High speed networks, Optical Network",
        email: "nsreenath@pec.edu",
        number : 9443289642
    },{
        name: "Dr. K. Vivekanandan, B. E., M. Tech.,Ph.D.",
        img: img2,
        Subject: "Software Engineering, Agile Programming",
        email: "k.vivekanandan@pec.edu",
        number : 9443777795
    },{
        name: "Dr.E. Ilavarasan, M.Tech., Ph. D",
        img: img7,
        Subject: "Distributed Systems, Microprocessors",
        email: "eilavarasan@pec.edu",
        number :  9443084714
    },{
        name: "Dr. Ka. Selvaradjou, M.Tech., Ph.D.,",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img3,
        Subject: " Microprocessors, Computer Hardware & Sensor Networks",
        email: "selvaraj@pec.edu",
        number : 9444684258
    },{
        name: "Dr. M. Sugumaran, M.Sc.,M.Phil.,M.Tech.,Ph.d",
        img: img4,
        Subject: "Algorithms, Theoretical ComputerScience, Computer Networks",
        email: "sugu@pec.edu",
        number : 9488829865
    },
    {
        name: "Dr. R. Manoharan, M.Tech., Ph.D.,",
        img: img5,
        Subject: "High Speed Networks, Internet Technology, Software Engineering",
        email: " rmanoharan@pec.edu",
        number : 9443468480
    },
    {
        name: "Dr. F. Sagayaraj Francis, M.Tech., M.B.A., Ph. D.,",
        img: img1,
        Subject: "Database Systems, Graphics, Automata & Management",
        email: " fsfrancis@pec.edu",
        number :  9443467590
    },
    {
        name: "Dr. (Mrs). R.Kalpana, B.Tech., M.Tech., Ph. D.,",
        img: unknown,
        Subject: "OOD, Distributed Computing, Middleware Technology",
        email: " rkalpana@pec.edu",
        number : 9443051212
    },
    {
        name: "Dr. A. Amuthan, B.Tech., M. E., Ph. D.,",
        img: unknown,
        Subject: "Software Engineering , Computer Networks, Network Security",
        email: " amuthan@pec.edu",
        number : 9444104373
    },
    
    
]

// associate professors
let associFacultyData = [
    {
        name: "Dr.S.Lakshmana Pandian, B.E., M.E., Ph. D.,",
        img: img9,
        Subject: " Language Technologies, Compiler Design",
        email: "lpandian72@pec.edu",
        number : 9443101692
    },{
        name: "Dr. (Mrs.) K. Saruladha, B.Tech., M.Tech., Ph.D.,",
        img: img11,
        Subject: "Ontology matching, Data management, Opinion mining and Sentiment analysis",
        email: "charuladha@pec.edu",
        number :  9442396080
    },{
        name: "Dr. (Mrs.) J. Jayabharathy, B.Tech., M.Tech., Ph. D.,",
        img: unknown,  //unknown
        Subject: "Distributed Computing",
        email: " bharathyraja@pec.edu",
        number : 9443292660
    },{
        name: "Dr.K.Sathiyamurthy, M.Tech.,Ph. D.,",
        img: img10,
        Subject: "Web Services and Internet Technology, NLP, Information Retrieval, E-Learning.",
        email: "sathiyamurthyk@pec.edu",
        number : 9443459362
    },{
        name: "Dr. E. Karunakaran, M.Tech., Ph. D.,",
        img: unknown, //unknown
        Subject: " Microprocessors, Computer Hardware & Sensor Networks",
        email: "ekaruna@pec.edu",
        number : 9442156328,
    },
]

// assistatnt professors
let assisFacultyData = [
    {
        name: "Dr.N. Sivakumar, B.Tech., M.Tech., Ph.D., MHRM",
        img: img15,
        Subject: "Database Management System, Computer Graphics",
        email: "sivakumar11@pec.edu",
        number : 9840901054
    },{
        name: "Ms.R. Sarala, B.Tech., M.Tech.,",
        img: unknown, //unknown
        Subject: "Computer Networks, Software Engineering",
        email: "sarala@pec.edu",
        number : 9442366902
    },{
        name: "Dr.J.Kumaran @ Kumar, M.C.A.,M.Tech., Ph. D.,",
        img: unknown, //unknown
        Subject: "AOP, Programming Languages",
        email: "kumaran@pec.edu",
        number :  944330076
    },{
        name: "Dr.M. Thirumaran, B.Tech., M.Tech., Ph. D.",
        qualification : "Phd, M.tech cse, B.tech",
        Year: 10,
        img: img13,
        Subject: "Automata Languages and Computation, Compiler Design, Web Technology",
        email: "thirumaran@pec.edu",
        number : 9894593367
    },{
        name: "Dr. (Mrs.) V. Akila, B.E., M.E., Ph. D.,",
        img: img16,
        Subject: "Mining Software Repositories, Social Network Analysis",
        email: "akila@pec.edu",
        number : 9786853753
    },{
        name: "Dr. (Mrs.) Salini P, B.Tech., M.Tech., Ph.D.,",
        img: img14,
        Subject: "Software Engineering, Information Security, Distributed Computing",
        email: "salini@pec.edu",
        number : 9994738640
    },{
        name: "Dr. M. Thenmozhi, B.Tech., M.E.,Ph. D.,",
        img: img12,
        Subject: "Data Warehousing and Data Mining, Distributed Computing, Operating Systems, Ontology",
        email: "thenmozhi@pec.edu",
        number :  9500893708
    },
    {
        name: "Dr. (Mrs.) J. I. Sheeba, B.E., M.E., Ph. D.,",
        img: unknown, //unknown
        Subject: "Data Mining, Network Security, Database Management System",
        email: "sheeba@pec.edu",
        number :   9443084976
    },
]

// supporting staffs
let programmer = [
    {
        name: "Dr. (Mrs.) R. Kavitha Kumar, M.Sc., M.Phil., Ph. D.,",
        img: unknown, //unknown
        Subject: "OOPS, Web Design, Pervasive Computing",
        email: "rkavithakumar@pec.edu",
        number : 0
    },
    {
        name: "Mr.P.Sethuraman ",
        img: unknown, //unknown
        Subject: "Junior Instructor",
        email: "",
        number : 0
    },
    {
        name: "Mr.N.Shanmugam ",
        img: unknown, //unknown
        Subject: "Junior Instructor",
        email: "",
        number : 0
    },
    {
        name: "Mr.K.Carounamourthy ",
        img: unknown, //unknown
        Subject: "Mechanic",
        email: "",
        number : 0
    },
    {
        name: "Mr.D.Soundramoorthy ",
        img: unknown, //unknown
        Subject: "Mechanic",
        email: "",
        number : 0
    },
    {
        name: "Mr.J.Codandaraman ",
        img: unknown, //unknown
        Subject: "Lab. Attendant",
        email: "",
        number : 0
    },
    {
        name: "Mr.K.Azhiaselvam ",
        img: unknown, //unknown
        Subject: "Lab. Attendant",
        email: "",
        number : 0
    },
    {
        name: "Mr.L.Ayyappan",
        img: unknown, //unknown
        Subject: "Lab. Attendat",
        email: "",
        number : 0
    },
    {
        name: "Mr.Devanandan",
        img: unknown, //unknown
        Subject: "Lab. Attendat",
        email: "",
        number : 0
    },
    {
        name: "Mr.K.Banugoban",
        img: unknown, //unknown
        Subject: "MTS",
        email: "",
        number : 0
    },
    
]

export default function Faculty(){
     return (
         <>
           <Faculty_single Fname="Professors" data={facultyData} />
           <Faculty_single Fname="Associate professors" data={associFacultyData} />
           <Faculty_single Fname="Assistant professors" data={assisFacultyData} />
           <Faculty_single Fname="Supporting staff" data={programmer} />
         </>
     ) 
}


function Faculty_single({ Fname, data }){
    let [state, setState] = useState(0)

    let name = data[state].name  
    let sub = data[state].Subject  
    let msg = data[state].email 
    let number = data[state].number 
    let image = data[state].img

    return(
        <>
        <div className='faculty block md:grid md:grid-cols-7 py-20'>
            <div className="big col-span-4">
                <div className='our-fac'>{ Fname }</div>
                <div className="big-in fac-info flex">
                   <div className="big-img">
                      <img style={{"width" : "440px", "height": "300px"}} src={image} alt="" />
                   </div>  
                   <div className="big-cont p-10">
                       <p className='fac-name'>{name}</p>                          
                       {
                          (number === 0) ?  <p>Designation : {sub}</p>  :  <p>Specialization : {sub}</p>  
                       }
                        
                       {
                          (number === 0) ?  <p></p>  :  <p>Phone : {number}</p>  
                       }
                        {
                          (msg === "") ?  <p></p>  :  <p>Email : {msg}</p>  
                       }
                    </div>       
                </div>
            </div>
            <div className="small block col-span-3 mx-10">
             {
                 data.map( (e, index) =>{
                     return (
                         <div className="small-cards flex justify-left px-10 py-5" onClick={()=>{setState(index)}}>
                             <div className="parts1">
                                 <img  className="faculty-img" src={e.img} alt="" />
                             </div>
                             <div className="parts2 px-5">
                                 <h5 className='fac-name2'>{e.name}</h5>
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