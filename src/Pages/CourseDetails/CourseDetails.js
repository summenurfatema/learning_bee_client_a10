import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSide from '../../shared/LeftSide/LeftSide';
import { FaStar } from 'react-icons/fa'



const CourseDetails = () => {

    const data = useLoaderData()

    console.log(data)
    const { image_url, mentor, title, details, cost, students, rating } = data;
    return (
        <div className='flex justify-evenly'>
            <LeftSide></LeftSide>
            <div className='flex justify-center items-center container  mx-auto my-10'>

                <div className='border-2 w-[500px] rounded-2xl shadow-lg'>
                    <img className='h-96 w-full' src={image_url} alt='thumbnile' />
                    <div className='p-2 space-y-3 text-gray-800 mb-5'>
                        <h2 className='font-semibold text-3xl'>{title}</h2>
                        <h3 className=' font-thin text-xl'>{details}</h3>
                        <p className='text-xl font-semibold'>Mentor: {mentor?.name}</p>
                        <p className='text-xl font-semibold'>Students :{students}</p>
                        <p className='text-xl font-semibold'> Rating :{rating.number}<FaStar className='inline pb-1 text-2xl pl-1 text-yellow-700' /> </p>
                        <p className='text-xl font-semibold'>Cost :<span className='text-3xl'>{cost}</span> $ Only</p>
                        <button className=' w-full block bg-yellow-400 py-2 px-3 rounded-lg mb-10 text-2xl font-semibold'>Buy Now</button>

                        <button className='w-full'><Link className='px-[171px] text-2xl font-semibold bg-yellow-400 py-2 rounded-lg' to={`/premium/${data.id}`}>Go Premium</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;