import React from 'react'
import  {HeroInitalTitle,HeroTitle,HeroText} from './../data/text-data'
import HeroImage from './../assets/undraw_quiz.svg'

export const Hero = () => {
  return (
    <div className='flex justify-between items-center py-8'>
        <div className='flex flex-col gap-4 w-[60%] font-poppins'>
            <h2 className='font-bold text-2xl'>{HeroInitalTitle}</h2>
            <h2 className='font-bold text-4xl font-poppins'>{HeroTitle}</h2>
            <p className='text-slate-700'>{HeroText}</p>
            <button className='bg-[#0E416D] text-white px-4 py-2 rounded-full self-start text-xs'>Learn more</button>
        </div>
        <div>
            <img src={HeroImage} className='w-48'/>
        </div>
    </div>
  )
}
