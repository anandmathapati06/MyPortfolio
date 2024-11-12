import { createContext, createElement, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sideexplorer from "./Sideexplorer" 
import Mainexplorer from './Mainexplorer'
import { Context,Contextprovider } from './Context'
function App() {
  
  const [count,setcount] = useState(0)
  
  return (
    <>
    <Contextprovider>


    <div className='lg:h-screen sm:h-full w-screen flex flex-col sm:flex-row justify-center items-center text-white bg-slate-900'>

      <Sideexplorer />
      <Mainexplorer />
    </div>
    </Contextprovider>
    
    </>
  )
}

export default App
