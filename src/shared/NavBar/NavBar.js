import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div>
                logo and name
            </div>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <p>user info</p>
                <button>dark</button>
            </div>

        </div>
    );
};

export default NavBar;