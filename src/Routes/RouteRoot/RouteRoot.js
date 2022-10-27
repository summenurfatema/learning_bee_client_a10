import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";

import Main from "../../layout/Main";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

import Register from "../../Pages/Register/Register";
import Blog from '../../Pages/Blog/Blog'
import Error from "../../Pages/Blog/Error/Error";

import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import PremiumCard from "../../Pages/PremiunCard/PremiumCard";

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
                loader: () => fetch('https://learning-bee-server-wine.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course-info/:id',
                loader: ({ params }) => fetch(`https://learning-bee-server-wine.vercel.app/course-info/${params.id}`),
                element: <CourseDetails></CourseDetails>
            }, {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`https://learning-bee-server-wine.vercel.app/course-info/${params.id}`),
                element: <PrivateRoute><PremiumCard></PremiumCard></PrivateRoute>
            },


            {
                path: '/faq',

                element: <FAQ></FAQ>
            },
            {
                path: '*',
                element: <Error></Error>
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