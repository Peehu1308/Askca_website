import React from 'react'
import { Link } from 'react-router-dom'

const Services_box = ({icon,title,content,link}) => {
  return (
    <div className="p-6 flex flex-col justify-center items-center text-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
  <div className="text-[#F49426] mb-4">{icon}</div>
  <p className="text-[#101010] font-semibold text-lg mb-2">{title}</p>
  <p className="text-[#182729] text-sm leading-relaxed mb-4">{content}</p>
  {link && <Link to={link} className="text-sm font-medium text-[#F49426] hover:underline">Know More</Link>}
</div>


  )
}

export default Services_box