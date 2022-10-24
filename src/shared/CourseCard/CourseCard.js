import React from 'react';

const CourseCard = ({ course }) => {
    const { title } = course
    return (
        <div>
            CourseCard
            <h2>{title}</h2>
        </div>
    );
};

export default CourseCard;