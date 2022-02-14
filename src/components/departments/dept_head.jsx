import React from "react";

import cse from "../../images/cse.jpg"
import { BiSearchAlt } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import HodCard from "./hod_card";
export default function DeptHeader() 
{
    return(
        <>
            <div className="deptHead">
                <div className="header_dept flex justify-around">
                    <div className="title_dept">
                        <h3>Computer Science Department</h3>
                    </div>
                    <div className="searchbar_dept">
                        <input type="text" placeholder="Search here"/>
                        <BiSearchAlt className="search_icon"/>
                    </div>
                </div>
                <div className="imgsec">
                    <img src={cse} alt="cse"/>
                </div>
                <div>
                    <HodCard/>
                </div>
            </div>


            <div className="navbar_for_dept">
              <div className="nav-inside flex justify-center">
                 <Link to="/cse/faculty">
                 <p>FACULTY  <AiFillCaretDown/></p>
                 </Link>
                 <Link to="/cse/syllabus">
                 <p>SYLLABUS <AiFillCaretDown/></p>
                 </Link>
                  <Link to="/cse/research">
                  <p>RESEARCH</p>
                  </Link>
                 <Link to="/cse/facilities">
                 <p>FACILITIES </p>
                 </Link>
                 <Link to="/cse/about">
                 <p>ABOUT</p>
                 </Link>
              </div>
            </div>
        </>
    )
}