import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import CourseCard from "../../shared/CourseCard/CourseCard";
import Main from "../../layout/Main";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

import Register from "../../Pages/Register/Register";
import Blog from '../../Pages/Blog/Blog'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',

                element: <Home></Home>
            },
            {
                path: '/home',

                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },


            {
                path: '/faq',

                element: <FAQ></FAQ>
            },
            {
                path: '/blog',

                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])