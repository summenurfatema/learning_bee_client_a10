import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex container mx-auto justify-around items-center'>
            <div className='w-[700px] space-y-8'>
                <h1 className='font-bold text-5xl text-gray-800'>Learning Bee</h1>
                <p className='font-thin text-3xl text-gray-800 m-10'>We are providing best courses to build you you as a succesfull front end web developer.Let's explore our all courses</p>
                <div>
                    <Link className='bg-yellow-600 text-2xl font-semibold py-3 px-4 rounded-lg' to='/courses'>Sneak a peek</Link>
                </div>

            </div>
            <div>
                <img className='w-[500px] h-96' src='https://img.freepik.com/free-vector/top-view-wooden-table-with-office-objects-leaves-insects-element_1308-51269.jpg?w=740&t=st=1666662999~exp=1666663599~hmac=43921b4fdeae02a51d132a4dac34180ce36f58b776151cf519db9e8bc8988fbf' alt='banner' />
            </div>
        </div>
    );
};

export default Home;