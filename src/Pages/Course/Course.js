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
        <div>
            <p className='text-4xl'>{allCourse.length}</p>
            {
                allCourse.map(course => <CourseCard
                    key={course.id}
                    course={course}></CourseCard>)
            }
        </div>
    );
};

export default Course;