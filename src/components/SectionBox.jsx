import React from 'react'
import { Link } from 'react-router-dom'

const SectionBox = ({section}) => {
  return (
    
    <div className='font-poppins flex items-center bg-white px-4 py-2 rounded-md gap-2 hover:scale-110 hover:cursor-pointer transition-transform ease-in-out hover:shadow-md'>
        <img className='w-10' src={section.icon}/>
        <div className='flex flex-col gap-1'>
            <h2 className='font-bold'>{section.title}</h2>
            <p className='text-xs'>{section.text}</p>
        </div>
    </div>
    
  )
}

export default SectionBox