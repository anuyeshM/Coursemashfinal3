import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';
const HomeSevices = () => {
    //declare course variable
    const [services, setServices] = useState([])
    //call api
    useEffect(() => {
        fetch('./fakeCoursesForHome.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //dytnamic function for changing url using histry
    const history = useHistory();
    const handleDetails = course => {
        //make dynamice route and apply
        history.push(`/course/${course.id}/${course.title}`)
    }
    return (
        <section className='my-5'>
            <div className="container">
                {/* title intro */}
                <h1>Start Learning with Top Courses</h1>
                <p>online courses from the world's top universities and companies.</p>
                {/* courses */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <ServiceCard key={service.id} service={service} handleDetails={handleDetails}></ServiceCard>)

                    }
                </div>
            </div>
        </section>
    );
};

export default HomeSevices;