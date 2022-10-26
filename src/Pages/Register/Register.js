import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const { createUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password)

        if (password.length < 6) {
            setError('Please enter at least 6 characters !!')
            return;
        }
        if (password !== confirm) {
            setError('Please enter correct password !!')
            return;
        }
        else { setSuccess('Registered Successfully !!!') }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset('')
                console.log(user)
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='flex justify-center items-center my-16'>
            <div class="flex flex-col items-center space-y-1 shadow-lg bg-zinc-200 w-[600px] p-10 md:space-y-3">

                <h1 className='text-3xl font-bold mb-10'>Please Create an Account Here !!!</h1>
                <form onSubmit={handleSubmit} class="flex flex-col items-start space-y-4">


                    <label class="text-xl" htmlFor="name">Name</label>

                    <input
                        class="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-800"
                        type="text" name="name" id="" required />



                    <label class="text-xl" htmlFor="email">Email address</label>
                    <input
                        class="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-800"
                        type="text" name="email" id="" required />



                    <label class="text-xl" htmlFor="password">Password</label>
                    <input
                        class=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-800 focus:ring-1 focus:ring-yellow-800"
                        type="password" name="password" id="" required />


                    <label class="text-xl" htmlFor="password">Confirm Password</label>
                    <input
                        class=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-800 focus:ring-1 focus:ring-yellow-800"
                        type="password" name="confirm" id="" required />

                    <p className='text-red-600 font-semibold text-xl'>{error}</p>
                    <p className='text-green-600 font-semibold text-xl'>{success}</p>
                    <div class="flex items-center space-x-2">

                        <div>
                            <input class="w-5 h-5 focus:ring-yellow-800" type="checkbox" />
                        </div>

                        <div>
                            <p className='text-xl'>I agree to the <a href="#" className="text-blue-600 pt-3 hover:underline"> Terms </a>
                                and <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a>
                            </p>
                        </div>

                    </div>


                    <button class="font-semibold text-xl text-white py-2 rounded-md bg-yellow-800 w-full">Register</button>
                    <p className='text-xl'>Already have an account? <Link className='text-xl text-blue-700 hover:underline' to='/login'>Log in</Link></p>
                </form>

            </div>
        </div>

    );
};

export default Register;