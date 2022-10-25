import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course)
    const { title, image_url, mentor } = course
    return (
        <div className='flex  justify-start border-2 rounded-xl shadow-lg w-[500px]'>
            <img className='w-40' src={image_url} alt='thumbnile' />
            <div className='p-4 space-y-3'>
                <h2 className='font-semibold text-2xl text-gray-800'>{title}</h2>
                <p>Mentor: {mentor.name}</p>
                <div><Link className='bg-yellow-400 py-2 px-3 rounded-lg' to={`/course-info/${course.id}`}>See Details</Link></div>
            </div>

        </div>
    );
};

export default CourseCard;