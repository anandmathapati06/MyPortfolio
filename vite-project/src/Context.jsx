import React, { Children, createContext, useContext, useRef, useState } from 'react'



const Context = createContext({}) 

const Contextprovider =  ({children}) =>{
  const [count,setcount] = useState(0)
  const maindiv = useRef("")
  const profileheight = useRef("")
  const skillsheight = useRef("")
  const projectheight = useRef("")
    

 return (
        <Context.Provider value={{count,setcount,maindiv,profileheight,skillsheight,projectheight}} >
            {children}
        </Context.Provider>
          )
} 

export {Context,Contextprovider}
