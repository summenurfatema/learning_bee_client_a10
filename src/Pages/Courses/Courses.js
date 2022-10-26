

import LeftSide from '../../shared/LeftSide/LeftSide';
import Course from '../Course/Course';


const Courses = () => {


    return (
        <div className='flex flex-col md:flex-row md:flew-row  md:justify-between'>


            <LeftSide></LeftSide>


            <div><Course></Course></div>
        </div>
    );
};

export default Courses;