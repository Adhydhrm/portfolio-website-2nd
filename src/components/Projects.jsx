// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProjectItem from './ProjectItem';
import ss1Img from '../assets/ss1.png';
import ss2Img from '../assets/ss2.png';
import ss3Img from '../assets/ss3.png';
import ss4Img from '../assets/ss4.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis voluptatibus, ex non iste voluptas sapiente modi quod laborum tempore, necessitatibus doloremque esse harum expedita delectus eaque? Nostrum, soluta quis?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={ss1Img} title='Github App' />
            <ProjectItem img={ss2Img} title='Heroicons App' />
            <ProjectItem img={ss3Img} title='Steam App' />
            <ProjectItem img={ss4Img} title='Fontshare App' /> 
        </div>
    </div>
  );
};

export default Projects;