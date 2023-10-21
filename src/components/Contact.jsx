// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
    <form action="https://getform.io/f/ac7444ad-7acd-41e7-b8cb-e11c37c35e95" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 font-semibold'>Name</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
            </div>
            <div className='flex flex-col'>
                <label className='uppercase text-sm py-2 font-semibold'>Phone</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
            </div>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2 font-semibold'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2 font-semibold'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2 font-semibold'>Message</label>
            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
            Send Massage
        </button>
    </form>
    </div>
  );
};

export default Contact;