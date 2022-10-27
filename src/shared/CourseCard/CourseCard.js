import React from 'react';
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {
    console.log(course)
    const { title, image_url, mentor } = course

    return (

        <div className='flex flex-col justify-start border-2 rounded-xl shadow-lg ml-9 my-10 w-[300px] md:ml-0 md:my-0'>

            <img className='w-40' src={image_url} alt='thumbnile' />
            <div className='p-4 space-y-3'>
                <h2 className='font-semibold text-2xl text-gray-800'>{title}</h2>
                <p className='font-semibold'>Mentor: {mentor.name}</p>
                <div className='bottom-0'><Link className='bg-yellow-400 py-2 px-3 rounded-lg' to={`/course-info/${course.id}`}>See Details</Link></div>

            </div>

        </div>
    );
};

export default CourseCard;