import { useContext, useEffect } from "react"
import { Context } from "../Context"

export default function(){

    const {profileheight,maindiv} = useContext(Context)

    useEffect(()=>{
        
        //    console.log(profileheight.current.offsetHeight);
    },[])

    return(
        <>
        <div ref={profileheight} className="h-full  flex flex-col items-start">
           
            <div className=" w-full mt-3 px-6 ">
                <h1 className="text-[50px]"><span className="text-cyan-600 ">Web</span> Developer</h1>
                <p className="my-5 text-[18px]">I am a passionate and eager individual with a strong focus on skill development in front-end development. I am excited about learning and staying abreast of the latest trends in technology, particularly in the realm of artificial intelligence. I am adept at picking up new concepts quickly and applying them to real-world projects. I have a proven ability to work collaboratively in team settings and thrive in dynamic environments. I am seeking opportunities to contribute to innovative projects and further enhance my skills in both front-end development and AI technologies.</p>
            </div>
                    <h1 className="text-[25px] mx-5">Qulification</h1>
            <div className="bg-cyan-600 m-4  w-fit rounded ">
                    <p className="mx-6 text-[15px] my-5"><span className="text-[20px]">Graduation :</span><br /> Rani Channamma University, A.S.Patil College of Commerce	(Autonomous),Vijayapura
                    2024 
                    </p>
                    
            </div>
            <div className="bg-cyan-600 m-4 w-fit rounded ">
                    <p className="mx-6 text-[15px] my-5"><span className="text-[20px]">Pre-University :</span><br /> Rani Channamma University, A.S.Patil College of Commerce	(Autonomous),Vijayapura
                    2021
                    </p>
                    
            </div>
            
        </div>
        </>
    )
}