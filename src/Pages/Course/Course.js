import React, { useEffect, useState } from 'react';
import CourseCard from '../../shared/CourseCard/CourseCard';

const Course = () => {
    const [allCourse, setAllCourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course-info')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])

    return (
        <div className='grid grid-cols-1 my-10 md:grid-cols-3 md:gap-6 md:px-16'>

            {
                allCourse.map(course => <CourseCard
                    key={course.id}
                    course={course}></CourseCard>)
            }
        </div>
    );
};

export default Course;