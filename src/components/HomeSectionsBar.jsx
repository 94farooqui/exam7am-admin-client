import React from 'react'
import { sections } from '../data/home-sections-buttons'
import SectionBox from './SectionBox'
import { Link } from 'react-router-dom'

const HomeSectionsBar = () => {
  return (
   <div className='bg-gray-200 w-full flex gap-12 p-16'>
    {sections.map(section => <Link className='flex' to={section.url}><SectionBox key={section.title} section={section}/></Link>)}
   </div>
  )
}

export default HomeSectionsBar