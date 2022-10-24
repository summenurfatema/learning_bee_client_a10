import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <p
                    key={course.id}
                ><Link to={`${course.id}`}>{course.name}</Link> </p>)
            }
            <Course></Course>
        </div>
    );
};

export default Courses;