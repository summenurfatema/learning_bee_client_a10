import React from 'react';
import { FaCrown, FaCheckSquare } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';


const PremiumCard = () => {
    const premium = useLoaderData()
    const { cost, facility } = premium
    console.log(premium)

    return (

        <div className='flex justify-center items-center my-10'>
            <div className='bg-blue-700 w-[500px] rounded-lg pb-3 px-2'>
                <div className='flex flex-col justify-center items-center text-center my-10'>
                    <FaCrown className='h-32 w-32 text-yellow-700'></FaCrown>
                    <h2 className='text-3xl font-bold text-white'>Premium Monthly</h2>
                    <p className='text-3xl font-bold text-white'>For {facility.for}</p>
                    <p className='text-2xl font-semibold mt-7 text-white'>Buy this course in <span className='line-through'>{cost}$</span> only <span>{facility.offer} $ by getting Premium Subscription</span></p>
                </div>
                <div className='bg-white p-7 m-3 space-y-5'>
                    <p className='text-xl font-semibold'><FaCheckSquare className='inline text-blue-700 mr-2' /> {facility.list1}</p>
                    <p className='text-xl font-semibold'><FaCheckSquare className='inline text-blue-700 mr-2' />{facility.list2}</p>

                    <p className='text-xl font-semibold'><FaCheckSquare className='inline text-blue-700 mr-2' />{facility.list3}</p>

                    <p className='text-xl font-semibold'><FaCheckSquare className='inline text-blue-700 mr-2' />{facility.list4}</p>

                    <p className='text-xl font-semibold'><FaCheckSquare className='inline text-blue-700 mr-2' />{facility.list5}</p>

                </div>
                <button className='text-2xl font-semibold bg-yellow-700 text-gray-900 py-3 px-4 w-full rounded-lg'>Grab This Offer</button>
            </div>
        </div>

    );
};

export default PremiumCard;