import React from 'react'
import { Link } from 'react-router-dom'

const DashboardCard = ({data}) => {
  return (
    <Link to={data.url} >
    <div className='w-full justify-between items-center bg-white border-2 p-4 rounded-lg flex'>
       
        <div className=' z-10 flex flex-col gap-2'>
            <h3 className='text-2xl text-slate-600 font-bold'>{data.title}</h3>
            <p className='text-2xl text-slate-500'>{data.value}</p>
        </div>
        <img className='w-24 right-4 opacity-30' src={data.image} /> 
    </div>
    </Link>
  )
}

export default DashboardCard