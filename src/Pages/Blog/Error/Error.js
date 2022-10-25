import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center container mx-auto'>
            <div className='flex flex-col items-center space-y-7'>
                <img className='h-[300px] w-[400px] rounded-2xl' src='https://t3.ftcdn.net/jpg/01/13/71/14/240_F_113711435_zkg0SDblS9QFW0r7EzzNWW0dIfThkA2Z.jpg' alt='error' />
                <div>
                    <Link className='text-2xl font-bold py-3 px-4 rounded-2xl bg-yellow-600' to='/home'>Go Back</Link>
                </div>

            </div>
        </div>
    );
};

export default Error;