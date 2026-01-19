import React from "react";

const Team_box = ({ title, desc, profile }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
      {/* Profile Image */}
      <img
        src={profile}
        alt={title}
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-[#F49426]"
      />

      {/* Name */}
      <h3 className="text-xl md:text-2xl font-semibold text-[#101010] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#182729] text-sm md:text-base leading-relaxed">
        {desc}
      </p>

      {/* Optional CTA / Social Icons */}
      {/* <div className="flex mt-4 space-x-4">
        <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
        <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
      </div> */}
    </div>
  );
};

export default Team_box;
