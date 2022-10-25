import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const data = useLoaderData()

    console.log(data)
    const { image_url, mentor, title, details, cost } = data;
    return (
        <div className='flex justify-center items-center container  mx-auto my-10'>

            <div className='border-2 w-[500px]'>
                <img className='h-72 w-full' src={image_url} alt='thumbnile' />
                <div className='p-2 space-y-3 text-gray-700 mb-5'>
                    <h2 className='font-semibold text-3xl'>{title}</h2>
                    <h3 className=' font-semibold text-xl'>{details}</h3>
                    <p className='text-xl font-semibold'>Mentor: {mentor?.name}</p>
                    <p className='text-xl font-semibold'>Cost :<span className='text-2xl'>{cost}</span> $ Only</p>
                    <button className=' w-full block bg-yellow-400 py-2 px-3 rounded-lg mb-10 text-2xl font-semibold'>Buy Now</button>

                    <button className='w-full'><Link className=' [175px] text-2xl font-semibold bg-yellow-400 py-2 px-3 rounded-lg' to='/premium'>Go Premiun</Link></button>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;