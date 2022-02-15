import React from "react";

import { BiSearchAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import HodCard from "./hod_card";

import logo from "../../images/PTU_Logo-color.png"
import cse from "../../images/cse.jpg"

export default function DeptHeader() 
{

    let toggle_nav = () =>{
        document.getElementsByClassName("small-navbar")[0].classList.toggle("hidden")
    }

    return(
        <>
            <div className="deptHead">
                <div className="header_dept flex justify-around">
                    <div className="title_dept flex items-center">
                        <img src={logo} alt="" className="img-top" />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp;Department of Computer Science and Engineering</h3>
                    </div>
                    <div className="searchbar_dept">
                        <input type="text" placeholder="Search here"/>
                        <BiSearchAlt className="search_icon"/>
                    </div>
                </div>
                <div className="imgsec">
                    <img src={cse} alt="cse"/>
                </div>
            </div>


            <div className="navbar_for_dept">
              <div className="bars" onClick={()=>{
                     toggle_nav()
              }}><FaBars /></div>
              <div className="small-navbar hidden md:hidden block">
                    <Link to="/cse/about" onClick={()=>{toggle_nav()}}>
                    <p>DEPARTMENT</p>
                    </Link>
                    <Link to="/cse/faculty" onClick={()=>{toggle_nav()}}>
                    <p>FACULTY</p>
                    </Link>
                    <Link to="/cse/syllabus" onClick={()=>{toggle_nav()}}>
                    <p>CURRICULUM</p>
                    </Link>
                     <Link to="/cse/research" onClick={()=>{toggle_nav()}}>
                     <p>RESEARCH</p>
                     </Link>
                    <Link to="/cse/facilities" onClick={()=>{toggle_nav()}}>
                    <p>FACILITIES</p>
                    </Link>
              </div>
              <div className="nav-inside flex justify-center">
                    {/* <div><img src={logo} className="log" style={{"width" : "90px", "height" : "90px", "border" : "none"}} alt="" /></div> */}
                    <Link to="/cse/about">
                    <p>DEPARTMENT</p>
                    </Link>
                    <Link to="/cse/faculty">
                    <p>FACULTY</p>
                    </Link>
                    <Link to="/cse/syllabus">
                    <p>CURRICULUM</p>
                    </Link>
                     <Link to="/cse/research">
                     <p>RESEARCH</p>
                     </Link>
                    <Link to="/cse/facilities">
                    <p>FACILITIES</p>
                    </Link>
              </div>
            </div>
        </>
    )
}