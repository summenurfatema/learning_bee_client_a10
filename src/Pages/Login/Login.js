import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))


    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
            })

    }
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user
            })

    }

    return (
        <div className='flex justify-center items-center my-16'>
            <div class="flex flex-col items-center space-y-3 shadow-lg bg-zinc-200 w-[600px] p-10">

                <h1 className='text-3xl font-bold mb-10'>Please Log in Here !!!</h1>
                <form onSubmit={handleSubmit} class="flex flex-col items-start space-y-4">



                    <label class="text-xl" htmlFor="email">Email address</label>
                    <input
                        class="px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-800"
                        type="text" name="email" id="" />



                    <label class="text-xl" htmlFor="password">Password</label>
                    <input
                        class=" px-3 py-2 rounded-lg shadow-sm border  border-gray-300 w-full focus:outline-none focus:border-yellow-800 focus:ring-1 focus:ring-yellow-800"
                        type="password" name="password" id="" />

                    <p className='text-xl text-blue-700 hover:underline'>Forget password?</p>

                    <button class="font-semibold text-xl text-white py-2 rounded-md bg-yellow-800 w-full">Log in</button>
                    <p className='text-xl'>Don't have any account? <Link className='text-xl text-blue-700 hover:underline' to='/register'>Register here</Link></p>



                    <div onClick={handleGoogleSignIn} className='flex bg-blue-700 items-center justify-between cursor-pointer'>
                        <img className='w-12 h-12 mr-11 p-1 rounded-full' src='https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=338&ext=jpg&uid=R69870244&ga=GA1.2.821203553.1657130385&semt=sph' alt='google' />
                        <h1 className='text-xl font-semibold text-white pr-16'>Sign in with Google</h1>
                    </div>

                    <div onClick={handleGithubSignIn} className='flex bg-blue-700 items-center justify-between'>
                        <img className='w-12 h-12 mr-12 p-1 rounded-full' src='https://img.freepik.com/free-icon/github-cat-circle_318-41747.jpg?size=338&ext=jpg&uid=R69870244&ga=GA1.2.821203553.1657130385&semt=sph' alt='github' />
                        <h1 className='text-xl font-semibold text-white pr-16'>Sign in with Github</h1>
                    </div>
                </form>

            </div>
        </div>



    );
};

export default Login;