import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col-reverse  container mx-auto justify-around items-center md:flex-row my-10'>
            <div className='p-5 md:p-0 md:w-[700px] space-y-8 '>
                <h1 className='font-bold text-5xl text-gray-800'>Welcome to Learning Bee...</h1>
                <p className='font-thin text-3xl text-gray-800'> Start here if you are new to programming.These course will develop your skills.Learn modern fundamentals of web development with Learnng BEE.</p>
                <div>
                    <Link className='bg-yellow-600 text-2xl font-semibold py-3 px-4 rounded-lg' to='/courses'>Sneak a peek</Link>
                </div>

            </div>
            <div>
                <img className='md:w-[500px] w-96 h-72 md:h-96' src='https://img.freepik.com/free-vector/top-view-wooden-table-with-office-objects-leaves-insects-element_1308-51269.jpg?w=740&t=st=1666662999~exp=1666663599~hmac=43921b4fdeae02a51d132a4dac34180ce36f58b776151cf519db9e8bc8988fbf' alt='banner' />
            </div>
        </div>
    );
};

export default Home;