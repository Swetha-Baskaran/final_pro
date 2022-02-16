import React from 'react';
import fac1 from "../../images/appl1.jpg"
import fac2 from "../../images/appl2.jpg"
import fac3 from "../../images/dc2.jpg"
import fac4 from "../../images/dc1.jpg"
import fac6 from "../../images/hard1.jpg"
import fac5 from "../../images/hard2.jpg"


const Facilities = () => {
  return (
  <div className="flex w-full bg-grey flex-col px-20 pt-10 justify-center items-center">
    <div className="block sm:grid sm:grid-cols-2  md:flex md:flex-col justify-center items-center">
      <div className="fac block md:flex md:flex-row justify-around py-10 ">
        <img src={fac1}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >SRINIVASA RAMANUJAN COMPUTING CENTRE</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
          Equipped with state of the art machines including a Super Computer PARAM with transputers. This centre also functions as an Internet browsing Centre with 64Kbps-leased line from STPI..
          </div>
        </div>
        
      </div>
     
      <div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
        <img src={fac2}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >DISTRIBUTED COMPUTING LAB</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
          Equipped with 40 system with Internet facility and has VPS-1 with i5 processor(64 bit os) RAM-4GB
          </div>
        </div>
        
      </div>
      <div className="fac block md:flex md:flex-row justify-around py-10 ">
        <img src={fac3}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >RESEARCH LABORATORY:</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
          Equipped with 14 system with internet facility with VPS-1,i3 processor(64 bit os) RAM-4GB
          </div>
        </div>
        
      </div>
      <div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
        <img src={fac4}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >HARDWARE AND TROUBLE SHOOTING LAB</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
          Equipped with 24 system with i5-4th Gen processor(64 bit) RAM-4GB
          </div>
        </div>
        
      </div>
      <div className="fac block md:flex md:flex-row justify-around py-10 ">
        <img src={fac5}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >APPLICATION LAB</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
          Equipped with 30 system i5-4th Gen processor(64 bit) RAM-2GB
          </div>
        </div>
        
      </div>
      <div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
        <img src={fac6}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >MICROPROCESSOR LABORATORY:</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
          Equipped with 25-Microprocessor and 10-Microcontroller
          </div>
        </div>
        </div>

        <div className="fac block md:flex md:flex-row justify-around py-10 ">
        <img src={fac5}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >INFORMATION SECURITY LAB</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
           Equipped with 16 system i3 processor(64 bits) RAM-4GB
          </div>
        </div>
        
      </div>
      <div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
        <img src={fac6}className="p-10 Facility-img" alt="" />
        <div className="details flex flex-col md:md:w-1/2   mx-5 ">
          <div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
            <h3 className="text-4xl" >PROBLEM SOLVING LAB</h3>
          </div>
          <div className="details_of_fac text-2xl text-left pt-5">
          Equipped with 27 system i5-4th GEN processor(64 bits) RAM-4GB
          </div>
        </div>

      </div>
      
      </div>
    </div>

         
  )}

export default Facilities;
