import { useContext, useRef, useState } from "react"
import { Context } from "./Context"
import image from "./file.png"
import cv from "./pdf/Anand_Mathapati_Resume.pdf"
import {FaFacebook,FaInstagram,FaGit,FaTwitter,FaEdit,FaLinkedinIn} from "react-icons/fa"
export default function Sideexplorer(){

    const {count,setcount,maindiv} = useContext(Context)
    const [imgsrc,setimgsrc] = useState(image)
    const [readonly,setreadonly] = useState(true)
    const [Name,setName] = useState("ANAND MATHAPATI")
    
   
    return (
    <>
    <div className="w-[90%] h-[80%] sm:w-1/3  sm:h-4/1 border-blue-900 bg-slate-900  sm:mx-4 rounded-xl shadow-2xl sm:shadow-blue-900  sm:my-5 ">
        <div className="img  flex justify-center relative">
                <img className="h-[30%] w-[30%] rounded-[50%] " src={imgsrc} alt="kkk" />
               
               
        </div>  
        <div className="text-white font-bold text-center text-[20px]">
            <input className="bg-transparent text-center outline-none" readOnly={readonly} type="text"
            
            value={"ANAND MATHAPATI"} />
        <h1 className="mx-5 font-bold  text-[15px] ">(Web Developer)</h1>
        </div>
        <div className=" flex justify-evenly mx-2 my-3  ">
            <a
            href="mailto:0606dnana@gmail.com?body=Dear%2C%20Anand%20Mathapati"
            className="hover:text-blue-500 bg-transparen outline-none cursor-pointer">0606dnana@gmail.com</a>

        <a href={"https://web.whatsapp.com/send?phone=6366181616"} 
        className=" hover:text-blue-500 bg-transparent  outline-none  cursor-pointer" >6366181616</a>
        </div>
        <h1 onClick={()=>{maindiv.current.scrollTo(0,0)}} className="mx-5 font-bold my-6 text-[20px] border-b cursor-pointer">Profile</h1>
        <h1 onClick={()=>{maindiv.current.scrollTo(0,590)}} className="mx-5 font-bold my-6 text-[20px] border-b cursor-pointer">Skills</h1>
        <h1 onClick={()=>{maindiv.current.scrollTo(0,890)}} className="mx-5 font-bold my-6 text-[20px] border-b cursor-pointer">Projects</h1>
        {/* <h1 className="mx-5 font-bold my-4 text-[20px]"><FaBeer /></h1> */}
        <div className="flex justify-evenly my-9">
                <FaInstagram onClick={()=>{
                    window.open("https://www.instagram.com/anand_06_06/")
                }} className="text-[30px] cursor-pointer " />
                <FaLinkedinIn
                onClick={()=>{
                    window.open("https://www.linkedin.com/in/anand-mathapati")
                }} 
                className="text-[30px] cursor-pointer" />
                <FaGit
                onClick={()=>{
                    window.open("https://github.com/anandmathapati06")
                }}  className="text-[30px] cursor-pointer " />
                {/* <FaTwitter className="text-[30px] cursor-pointer " /> */}
        </div>
        <div className="flex justify-center">
            
            <a  href={cv} download target="_blank" className=" p-2 rounded bg-[#4285f4]" >Download CV</a>
            {/* <button
            onClick={()=>{
                setreadonly(false)
            }}
            className="mx-3 bg-[#4285f4] px-3 rounded">Edit</button> */}
        </div>
    </div>
    </>
    )
}