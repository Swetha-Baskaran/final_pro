import React from "react";

import img1 from "../../images/cse.jpg"
import img2 from "../../images/ece.jpg"
import img3 from "../../images/engineers.jpeg"
import img4 from "../../images/mectro.jpg"

export default function Research(){
    return(
        <>
        <h2>Thrust areas</h2>
        <div className="grid grid-cols-5 gap-6 p-10">
            <div className="col-span-1 bg-red-900 text-white p-20">Internet of things</div>
            <div className="col-span-1 bg-red-900 text-white p-20">Machine Learning</div>
            <div className="col-span-1 bg-red-900 text-white p-20">Information Security</div>
            <div className="col-span-1 bg-red-900 text-white p-20">Computer Networks</div>
            <div className="col-span-1 bg-red-900 text-white p-20">Image Processing </div>
        </div>
        {/* part 1 */}
        <h2>Researches and Achievements</h2>
       <div className="grid grid-rows-3 grid-flow-col gap-6 p-10 text-black">
           <div className="row-span-3 bg-red-300 text-left carrd m-0" style={{"background" : `url(${img1})`, "backgroundRepeat": "no-repeat", "backgroundSize" : "cover"}}>
                 <div className="colour p-10 pb-20 text-white">
                     <h2 className="text-left text-4xl block">Project Title</h2>
                     <br />
                     <div className="mt-20">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum amet ipsam aliquam vero repudiandae totam possimus? Consequuntur perspiciatis dignissimos impedit sit quos, nulla dicta magnam, debitis, in cumque fuga temporibus! Culpa facilis, exercitationem optio nam a reprehenderit rerum totam debitis quasi sit, similique vero expedita facere cum atque eos sint alias voluptate placeat. Reiciendis laboriosam nulla quia. Officiis, voluptatibus maxime! 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, recusandae quidem. Eius provident, quis fuga accusamus distinctio itaque blanditiis. Qui culpa dolore unde ipsum officia alias ullam ratione inventore.S
                     </div>
                     <div className="read mt-10">Read more...</div>
                 </div>
                
           </div>

           <div className="col-span-2 grid grid-cols-2 gap-6">
               <div className="col-span-1 bg-red-300 p-10 text-left" style={{"background" : `url(${img1})`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300 p-10 text-left" style={{"background" : `url(${img1})`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
           </div>
           
           <div className="row-span-2 col-span-2 grid grid-cols-3 gap-6 colour">
               <div className="col-span-1 bg-red-300 p-10 text-left" style={{"background" : `url(${img1})`}}>Lorem ipsum dolor sit amet atum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300 p-10 text-left" style={{"background" : `url(${img1})`}}>Lorem ipsum dolor sit amet atum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300 p-10 text-left" style={{"background" : `url(${img1})`}}>Lorem ipsum dolor sit amet atum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias./</div>
           </div>
       </div>

       {/* part 2 */}
       <div className="grid grid-rows-3 grid-flow-col gap-6 p-10 pt-0">
           <div className="col-span-2">
               <div className="bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
           </div>
           <div className="row-span-2 col-span-2 grid grid-cols-3 gap-6">
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
           </div>
           <div className="row-span-3 bg-red-300">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus maxime eligendi a itaque! Possimus sapiente a eveniet praesentium totam iusto quaerat repudiandae ipsam dicta, provident minima aliquam quod? Voluptatibus!
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus maxime eligendi a itaque! Possimus sapiente a eveniet praesentium totam iusto quaerat repudiandae ipsam dicta, provident minima aliquam quod? Voluptatibus!
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus maxime eligendi a itaque! Possimus sapiente a eveniet praesentium totam iusto quaerat repudiandae ipsam dicta, provident minima aliquam quod? Voluptatibus!
           </div>
       </div>

              {/* part 2 */}
           <div className="grid grid-cols-5 gap-6 p-10 pt-0">
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
               <div className="col-span-1 bg-red-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum quibusdam, eos suscipit ducimus optio architecto molestias nostrum nobis alias.</div>
           </div>
        </>
    )
}