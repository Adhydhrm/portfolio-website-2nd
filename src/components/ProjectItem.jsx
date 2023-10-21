// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute text-center'>
            <h3 className='text-2xl font-bold text-white tracking-wider'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white'>React Js</p>
            <a href="/">
                <p className='p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More info</p>
            </a>
        </div>
    </div>
  );
};

export default ProjectItem;