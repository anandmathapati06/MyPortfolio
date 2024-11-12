import { useContext, useEffect, useState } from "react"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { Context } from "./Context"
export default function Mainexplorer()
{

    const {maindiv,profileHeight} = useContext(Context)
    const [count,setcount] = useState(0) 
    

    
    
    return(<>
    <div  ref={maindiv} className="lg:h-[80%] w-[90%] sm:w-full  sm:mx-7  rounded-md shadow-2xl  sm:shadow-blue-900  overflow-auto scroll-smooth ">

        <Profile />
        <Skills />
        <Projects />
    </div>

        </>)
}