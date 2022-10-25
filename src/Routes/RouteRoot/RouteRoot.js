import { createBrowserRouter } from "react-router-dom";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import CourseCard from "../../shared/CourseCard/CourseCard";
import Main from "../../layout/Main";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

import Register from "../../Pages/Register/Register";
import Blog from '../../Pages/Blog/Blog'
import Error from "../../Pages/Blog/Error/Error";

import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Premium from "../../Pages/Premium/Premium";

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
                path: '/course-info/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course-info/${params.id}`),
                element: <CourseDetails></CourseDetails>
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
                path: '/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>
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