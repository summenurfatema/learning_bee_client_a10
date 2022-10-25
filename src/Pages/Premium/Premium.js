import React from 'react';
import { useState, useEffect } from 'react';
import PremiumCard from '../PremiunCard/PremiumCard';


const Premium = () => {
    const [premiumCourse, setPremiumCourse] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course-info')
            .then(res => res.json())
            .then(data => setPremiumCourse(data))
    }, [])
    return (
        <div>
            {
                premiumCourse.map(premium => <PremiumCard
                    key={premium.id}
                    premium={premium}></PremiumCard>)
            }
        </div>
    );
};

export default Premium;