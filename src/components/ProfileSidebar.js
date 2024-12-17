import React from 'react';
import Typical from 'react-typical';
import { name ,skills,title } from '../profileconfig.js';



const ProfileSidebar = (props) => {
  const isDarkMode=props.isDarkMode;
  return (
    <div className="flex flex-col justify-center h-full p-6">
  <h2 className={`text-2xl lg:text-3xl font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>
    I'm
  </h2>
  <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
    {name}
  </h1>
  <p className="text-xl lg:text-2xl font-light mb-6">{title}</p>
  <Typical
    steps={skills}
    loop={Infinity}
    wrapper="p"
    className="text-xl lg:text-2xl"
    style={{
      animationDuration: '20s', // Slows down the animation
      transition: 'all 0.7s ease-in-out', // Smoothens transitions
    }}
  />
</div>

  );
};

export default ProfileSidebar;