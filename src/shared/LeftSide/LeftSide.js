import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const LeftSide = () => {
    const [allCourse, setAllCourse] = useState([])
    useEffect(() => {
        fetch('https://learning-bee-server-wine.vercel.app/course-info')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])
    return (
        <div className='pl-12'>
            <h2 className='pb-2 border-b-2 mb-5 font-bold text-2xl'>Our Courses</h2>
            {
                allCourse.map(course => <p key={course.id}>
                    <Link className='text-xl font-semibold text-gray-800' to={`/course-info/${course.id}`}>{course.name}</Link>

                </p>)

            }
        </div>
    );
};

export default LeftSide;