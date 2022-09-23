import React from 'react'

const Button = ({onClick,children}) => {
  return (
     <button className=" btn btn-outline btn-info text-white py-3 px-3 my-5 rounded hover:from-pink-500 hover:to-yellow-500"
     onClick={onClick}
       >
            
     {children}
   </button>  )
}

export default Button