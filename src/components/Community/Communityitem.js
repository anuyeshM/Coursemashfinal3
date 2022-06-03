import React from 'react';
//for showing star rating . it's shows some error on console but work properly
import StarRatings from 'react-star-ratings';




const CommunityI = (props) => {
    //destrure props from course 
    const { title, rating, totalRate, imgUrl} = props.course;
    const { handleDetails, course } = props;
   
    
    return (
        <div className='row course-container border-bottom my-4'>
            <div className='d-flex align-items-center my-3'>
                <div className='me-3'>
                <img height={220} width={220} style={{ alignSelf: 'center' }}  src={imgUrl} alt="" />
                <button className='btn btn-primary m-2' onClick={() => window.location.href = "https://chat.whatsapp.com/GkTqZEkhDl0DRf6dVZDL7r"}>Join Whatsapp</button>
                <button className='btn btn-primary m-2' onClick={() => window.location.href = "https://discord.gg/Rgfmhjhh"}>Join Discord</button>
                </div>
                <div className='w-100'>
                    <h1>{title}</h1>
                    
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>
                  
                    
                    <button className='btn btn-secondary m-2' onClick={() => handleDetails(course)}>More Details</button>
                </div>
            </div>                                                 
        ;

        </div>
    );
};

export default CommunityI;