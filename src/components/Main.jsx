
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Wallpaper from '../assets/moon_wallpaper.jpg';
import {TypeAnimation} from 'react-type-animation';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left shadow-2xl' src={Wallpaper} alt='' />
            <div className='w-full h-screen absolute top-0 bot-0 left-0 right-0 bg-white/30' >
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center' >
                <h1 className='sm:text-5xl text-4xl font-bold text-black' >I`m Adam</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-black' >I`m a 
                <TypeAnimation
                    sequence={[
                     // Same substring at the start will only be typed out once, initially
                    'Developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Coder',
                    1000,
                    'Tech Enthusiast',
                    1000,
                    'UI/UX Enthusiast',
                    1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft:'5px'  }}
                    repeat={Infinity}
                    />       
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full' >
                    <a href=""><FaTwitter className='cursor-pointer' size={23} /></a>
                    <a href="https://instagram.com/adhydhrm?igshid=MzMyNGUyNmU2YQ=="><FaInstagram href="" className='cursor-pointer' size={23} /></a>
                    <a href=""><FaLinkedinIn className='cursor-pointer' size={23} /></a>
                    <a href=""><FaGithub className='cursor-pointer' size={23} /></a>
                </div>
            </div>
        </div>
     </div>
    );
};

export default Main;