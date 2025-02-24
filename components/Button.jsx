// import React from 'react'

    const Button=({college})=>{
    console.log(college);
  return (
    <>
    <h1>Hello My college name is {college}</h1>
    <button className="relative block group ">
    <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
    <div className="transition bg-black relative border-2 rounded-lg -translate-x-2 -translate-y-2">
      <div className="p-2 ">
        <p className="text-xl font-outerSans font-medium">Button{college}</p>
      </div>
    </div>
  </button>
    </>
  )
}

export default Button