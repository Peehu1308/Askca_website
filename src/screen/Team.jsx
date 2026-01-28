import React from 'react'
import Team_box from '../components/Team_box'
import about from "../assets/about.jpeg"

const Team = () => {
  return (
    <div className="w-full bg-[#FFFFFF] px-6 md:px-12 py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#101010] mb-4">
          Our Founders
        </h1>
        <p className="text-[#182729] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Meet the professionals driving <span className='font-bold'>ASK<span className="text-[#F49426]">CA</span></span> with expertise, integrity, and strategic financial insight.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <Team_box
          title="CA Shivam Kumar Aggarwal"
          desc="Chartered Accountant with 3+ years of experience at Ernst & Young, specializing in Indian & international taxation, regulatory compliance (SEBI/RBI), and DTAA advisory. Has advised 250+ domestic and global corporates, including PE funds, AIFs, PSUs, and financial institutions."
          profile={about}
        />

        <Team_box
          title="CA Mayank Kumar Aggarwal"
          desc="Chartered Accountant with 8+ years of experience in financial reporting, direct taxation, and investment management within a listed entity. Known for strategic financial insight, regulatory expertise, and a strong client-focused leadership approach."
          profile={about}
        />

        {/* Add more team members here */}
      </div>
    </div>
  )
}

export default Team
