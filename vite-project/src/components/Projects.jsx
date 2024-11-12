
// import img from '../file.png';
import { useState } from 'react';
import img from '../images/agecalc.jpg';
import img1 from '../images/cc.jpg';
import img2 from '../images/spc.jpg';
import img3 from '../images/wheather.jpg';
import img4 from '../images/brock.jpg';
import img5 from '../images/youtube.png';
import {MdLink} from 'react-icons/md';
import {motion} from 'framer-motion';

export default function(){


    const [hover,sethover] = useState(false)
    const [hoverindex,sethoverindex] = useState("")
   const array1 = ["Age Calculator","Currency Converter","Stone Paper Scissor","Weather","Brokerage Calc","Youtube Channel Analysis"]
   const imgarray1 = [img,img1,img2,img3,img4,img5]
   const skillsarray = ["Html","Css","React Js","Java Script","Tailwindcss"]
   const linksarray = ["https://leafy-medovik-347456.netlify.app",
    "https://currencyconverterpage.netlify.app",
    "https://warm-narwhal-a80411.netlify.app",
    "https://heroic-blini-af1ed1.netlify.app",
    "https://dulcet-bunny-b36fc1.netlify.app",
    "https://channelanalysis.netlify.app"]
    return(<>
    <div className=" overflow-hidden">

        <h1 className="text-[25px] font-bold mx-9">Projects</h1>
        <div className="bg-green-90 w-full  "> 
             
             {array1.map((item,index)=>{
               return(
                  <div onMouseOver={()=>{
                    // sethover((prev)=>{!prev})
                    // console.log(imgarray1[index]);
                    sethoverindex(index)
                    
                  }}
                  onMouseLeave={()=>{
                    
                    sethoverindex("")
                    // sethover((prev)=>{!prev})
                  }}
                  className="flex  m-2 rounded-xl  bg-slate-800  relative py-7">
                   {hoverindex === index ? 
                  
                   
                   <motion.div
                   initial={{opacity:0,
                    x:300
                   }}
                   animate={{scale:1,
                    opacity:1,
                    x:0
                   }}
                   transition={{duration:.5}}
                   className={`absolute z-50 ${index === imgarray1.length-1 ?"-top-[100%]" :"top-0"} right-[10%] h-[500px] w-[40%] `}>
                    <img src={imgarray1[index]} alt="" />
                    
                    </motion.div>:""}
                
                <p className="flex items-center  text-center mx-3 font-bold text-[25px]">{item}
                <MdLink onClick={()=>{
                    window.open(linksarray[index])
                }}className='text-[45px] mx-4 hover:text-blue-900 cursor-pointer' /> </p>
                
             </div>
               )
             })}
            
        </div>
    </div>
    </>)
}