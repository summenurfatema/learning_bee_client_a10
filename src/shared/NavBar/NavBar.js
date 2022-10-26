import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaMoon, FaSun, FaUser } from "react-icons/fa"
import { AuthContext } from '../../context/UserContext';



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const [open, setOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
                <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400' to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400' to='/courses'>Courses</Link>
                    </li>
                    <li>
                        <Link className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400' to='/faq'>FAQ</Link>
                    </li>
                    <li>
                        <Link className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400' to='/blog'>Blog</Link>
                    </li>
                </ul>
                <div
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center lg:mx-auto"
                >
                    <img className='w-20 h-20' src='https://img.freepik.com/free-vector/bee_1308-18942.jpg?w=360&t=st=1666705778~exp=1666706378~hmac=0bc9f88a12d7c9f4fdbc421dc0e74ae92dafc06b7e530a0165f4921add8c58a7' alt='logo' />
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Learning BEE
                    </span>
                </div>

                {
                    user?.uid ?
                        <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
                            <li>
                                {
                                    user?.photoURL ?

                                        <img className='w-12 h-12 rounded-full' title={user.displayName} src={user.photoURL} alt='user' />

                                        :
                                        <FaUser />
                                }
                            </li>
                            <li>
                                <Link onClick={logOut} className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>Log out</Link>
                            </li>
                            <li onClick={() => setOpen(!open)}>
                                {
                                    open ? <FaMoon className='h-10 w-7 text-gray-7000' /> : <FaSun className='h-10 w-7 text-yellow-700' />
                                }
                            </li>
                        </ul>

                        :

                        <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">

                            <li>

                                <Link className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400' to='/login'>Log in</Link>
                            </li>
                            <li>
                                <Link className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400' to='/register'>Sign up</Link>


                            </li>
                            <li onClick={() => setOpen(!open)}>
                                {
                                    open ? <FaMoon className='h-10 w-7 text-gray-7000' /> : <FaSun className='h-10 w-7 text-yellow-700' />
                                }
                            </li>

                        </ul>
                }
                <div class="ml-auto lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div class="absolute top-0 left-0 w-full">
                            <div class="p-5 bg-white border rounded shadow-sm">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <div
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            class="inline-flex items-center"
                                        >
                                            <img className='w-20 h-20' src='https://img.freepik.com/free-vector/bee_1308-18942.jpg?w=360&t=st=1666705778~exp=1666706378~hmac=0bc9f88a12d7c9f4fdbc421dc0e74ae92dafc06b7e530a0165f4921add8c58a7' alt='logo' />
                                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Learning BEE
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul class="space-y-4">
                                        <li>
                                            <Link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" to='/home'>Home</Link>
                                        </li>
                                        <li>
                                            <Link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" to='/courses'>Courses</Link>
                                        </li>
                                        <li>
                                            <Link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" to='/faq'>faq</Link>
                                        </li>
                                        <li>
                                            <Link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" to='/blog'>Blog</Link>
                                        </li>
                                        <li>
                                            <Link class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to='/login'>Login</Link>
                                        </li>
                                        <li>
                                            <Link class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" to='/register'>Sign up</Link>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;