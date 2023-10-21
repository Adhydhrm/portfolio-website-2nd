// eslint-disable-next-line no-unused-vars
import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis harum nesciunt deserunt aperiam ipsam tempore debitis, necessitatibus aliquid eius ipsa voluptatem nemo, eaque officia inventore, consequuntur nulla blanditiis mollitia maxime!'
    },
    {
        year: 2020,
        title: 'Google',
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis harum nesciunt deserunt aperiam ipsam tempore debitis, necessitatibus aliquid eius ipsa voluptatem nemo, eaque officia inventore, consequuntur nulla blanditiis mollitia maxime!'
    },
    {
        year: 2020,
        title: 'Amazon',
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis harum nesciunt deserunt aperiam ipsam tempore debitis, necessitatibus aliquid eius ipsa voluptatem nemo, eaque officia inventore, consequuntur nulla blanditiis mollitia maxime!'
    },
    {
        year: 2020,
        title: 'Facebook',
        duration: '3 years',
        details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis harum nesciunt deserunt aperiam ipsam tempore debitis, necessitatibus aliquid eius ipsa voluptatem nemo, eaque officia inventore, consequuntur nulla blanditiis mollitia maxime!'
    },
];

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;