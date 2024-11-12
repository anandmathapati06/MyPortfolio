import {motion ,inView , useInView} from 'framer-motion'
import { useCallback, useRef, useState , useEffect } from 'react'


export default function(){
const [intialValuee,setInitialvalue] = useState("0")
const ref = useRef(null)
const isinview = useInView(ref)
useCallback(()=>{

})
useEffect(() => {
    if(isinview){

        setInitialvalue("90%")
        console.log("Element is in view: ", isinview)
    }
  }, [isinview])

    return(<>
    <div  className=" ">
        {/* <input type="range" /> */}
        <h1 className="m-9  text-[25px] underline underline-offset-4 font-bold">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 bg-red-90 my-9 ">

            <motion.div 
            ref={ref}
            initial={{width:intialValuee}}
            whileInView={{
                transition:{duration:1},

                width:"100%"
            }}
            
            className="mx-2  overflow-hidde  bg-cyan-90 shadow-2xl ">
                <h2 className="text-[20px] mx-5 my-1 font-bold ">HTML</h2>
                <div className=" w-[80%] h-4 mx-2 bg-cyan-600 ">
                    
                </div>
            </motion.div>
            <motion.div
            initial={{width:intialValuee}}
            whileInView={{
                transition:{duration:1},
                width:"100%"

            }}
             className="mx-2 overflow-hidde bg-cyan-90 shadow-2xl ">
                <h2 className="text-[20px] mx-5 my-1 font-bold ">CSS</h2>
                <div className=" w-[89%] h-4 mx-2 bg-cyan-600 ">
                   
                </div>
            </motion.div>
            <motion.div
            initial={{width:intialValuee}}
            whileInView={{
                transition:{duration:1},
                width:"90%"

            }}
            className="mx-2 overflow-hidde bg-cyan-90 my-9 sm:my-0 shadow-2xl ">
                <h2 className="text-[20px] mx-5 my-1 font-bold ">Java Script</h2>
                <div className=" w-[91%] h-4 mx-2 bg-cyan-600 ">
                   
                </div>
            </motion.div>
            <motion.div 
            initial={{width:intialValuee}}
            whileInView={{
                transition:{duration:1},
                width:"100%"

            }}
            className="mx-2 overflow-hidde bg-cyan-90 my-9 shadow-2xl  ">
                <h2 className="text-[20px] mx-5 my-1 font-bold ">PhotoShop</h2>
                <div className=" mx-2 w-[60%] h-4  bg-cyan-600 ">
                    
                </div>
            </motion.div>
            <motion.div
            initial={{width:intialValuee}}
            whileInView={{
                transition:{duration:1},
                width:"100%"

            }}
            className="mx-2 overflow-hidde bg-cyan-90 my-2 sm:my-9 shadow-2xl  ">
                <h2 className="text-[20px] mx-5 my-1 font-bold ">Tailwind Css</h2>
                <div className=" mx-2 w-[82%] h-4  bg-cyan-600 ">
                    
                </div>
            </motion.div>
            <motion.div 
             initial={{width:intialValuee}}
             whileInView={{
                 transition:{duration:1},
                 width:"90%"
 
             }}
            className="mx-2 overflow-hidde bg-cyan-90 my-2 sm:my-9 shadow-2xl  ">
                <h2 className="text-[20px] mx-5 my-1 font-bold ">React Js</h2>
                <div className=" mx-2 w-[87%] h-4  bg-cyan-600 ">
                    
                </div>
            </motion.div>
        </div>
    </div>
    </>)
}