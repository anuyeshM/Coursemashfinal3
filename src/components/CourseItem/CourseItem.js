import React from 'react';
//for showing star rating . it's shows some error on console but work properly
import StarRatings from 'react-star-ratings';




const CourseItem = (props) => {
    //destrure props from course 
    const { title, institute, rating, totalRate, lebel, price, imgUrl, pdf} = props.course;
    const { handleDetails, course } = props;
   
    
    return (
        <div className='row course-container border-bottom my-4'>
            <div className='d-flex align-items-center my-3'>
                <div className='me-3'>
                <img height={220} width={220} style={{ alignSelf: 'center' }}  src={imgUrl} alt="" />
                </div>
                <div className='w-100'>
                    <h1>{title}</h1>
                    <p><small>Offer by: {institute}</small></p>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
                            <h6>Lebel: {lebel}</h6>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <p><strong>Course Fee:</strong> INR{price}</p>
                    <button className='btn btn-primary' onClick={() => handleDetails(course)}>More Details</button>
                    <a style={{background: '#1484f5', color:'white',width:'100px', height: '38px',padding:'7px 7px 7px 7px',margin: '2px 2px 2px 2px',font:'400 15px system-ui'}} href={pdf}>PDF</a>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;
