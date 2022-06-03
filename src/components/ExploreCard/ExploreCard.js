import React from 'react';

const ExploreCard = (props) => {
    //destruture props from course object
    const { name, courses, thumbnail } = props.course
    return (
        <article className='col'>
            <div className="row shadow rounded h-100">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={thumbnail} className="img-fluid h-75" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"><small className="text-muted">{courses} Courses</small></p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ExploreCard;