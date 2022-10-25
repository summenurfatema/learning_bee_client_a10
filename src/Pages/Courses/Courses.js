
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()

    return (
        <div className='flex justify-between'>
            <div className='pl-12'>
                <h2 className='pb-2 border-b-2 mb-5 font-bold text-2xl'>Our Courses</h2>
                {
                    courses.map(course => <p className='text-xl font-semibold'
                        key={course.id}>{course.name}
                    </p>)
                }
            </div>
            <div><Course></Course></div>
        </div>
    );
};

export default Courses;