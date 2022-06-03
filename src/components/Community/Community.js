import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CommunityI from '../Community/Communityitem';

const Community = () => {
    const [courses, setCourses] = useState([])
    // call api data to render UI
    useEffect(() => {
        fetch('./fakeCourses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    //dytnamic function for changing url using history
    const history = useHistory();
    const handleDetails = course => {
        history.push(`/course/${course.id}/${course.title}`)
    }
    
    return (
        <main>
            <div className='container'>
                {
                    courses.map(course => <CommunityI key={course.id} course={course} handleDetails={handleDetails}></CommunityI>)
                }
            </div>
        </main>
    );
};

export default Community;