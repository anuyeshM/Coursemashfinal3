import React, { useEffect, useState } from 'react';
import ExploreCard from '../ExploreCard/ExploreCard';

const HomeExplore = () => {
    const [explore, setExplore] = useState([])
    // call all type of courses api to rendure courses name UI
    useEffect(() => {
        fetch('./fakeCourseHome.JSON')
            .then(res => res.json())
            .then(data => setExplore(data))
    }, [])
    return (
        <section className='container'>
            <h1 className='display-4 py-5'>Explore Learn Without Limits</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
                {
                    explore.map(course => <ExploreCard key={course.id} course={course}></ExploreCard>)
                }
            </div>
        </section>
    );
};

export default HomeExplore;