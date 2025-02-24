// import React from 'react'

const Button2 = ({college2,collection}) => {
  return (
    // <div>Button2</div>
    <>
    <h1>Hello My college name is {college2}</h1>
    <button className="relative block group ">
    <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
    <div className="transition bg-black relative border-2 rounded-lg
     -translate-x-2 -translate-y-2">
      <div className="p-2 ">
        <p className="text-xl font-outerSans font-medium">Button2{college2}</p>
      </div>
    </div>
  </button>
  <p>{collection}</p>
    </>
  )
}

export default Button2