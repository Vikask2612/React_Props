// import React from 'react'
// import useState from "react";
// as
import Button from "./components/Button"
import Button2 from "./components/Button2"
// import { useState } from "react"

const App = () => {
  
  // const [count, setCount] = useState(0)
  
  let MyData={
    username:"vikas",
    age:24,
    City:"Nashik"
  }

  let newArray =[1,2,3]

  let newsongs = ["Hello","uday","Pomplet-Fry"];

  return (
    <>
    <div className="p-5 bg-green-600 text-black rounded-xl"> Tailwind test</div>
   
          <Button college="KKW" Data={MyData} Array={newArray}/>
          <Button2 college2="KKW2" collection={newsongs}/>
                               
    </>
  )
}

export default App

