
import { useParams } from 'react-router';
import React from 'react';


import YouTube from '../../../node_modules/react-youtube';

import {Card, CardGroup} from '../../../node_modules/react-bootstrap';
import '../../../node_modules/mdb-react-ui-kit';
import StarRatings from 'react-star-ratings';
import img from "../../Images/certificate (1).png";
import img1 from "../../Images/video.png";
import img2 from '../../Images/folder.png';
import ReactWhatsapp from '../../../node_modules/react-whatsapp';
import courseData from "./../../data/fakeCourses.json"

const SingleCourse = () => {
  const onPlayerReady  = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  const opts = {
    height: '420',
    width: '550',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
   
    // const courses = useContext(singleContext)
    //for collect url dynamic param value
    const { id } = useParams()

    // match url id and fakedb courses object to render UI
    const findMatch = courseData.find(single => parseInt(id) === single.id);
    // destruture match course
    const { title,institute, rating, totalRate, lebel, price, description,videoId, payLink, review1, review2, review3, review4, uname1, uname2, uname3, uname4, uimg1, uimg2, uimg3, uimg4} = findMatch; 
                                                   
    return (
   
<>
        <section className='container my-lg-12'>
        <div className='row'>
            {/* banner left part text */}

            <div className="col-md-6 d-flex align-items-center pe-0 t-10;">
            <div class="shadow-lg p-25 mb-5 mx-30 align-items-center bg-white rounded">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom:"20px",marginTop:"20px",  border: "2px solid red" }}> 
            <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
            </div>
            <ReactWhatsapp number="+918260255206" message="Hi I want for info about your course !"><button className='btn btn-primary px-5 py-3 me-2'>For course details chat with our team</button></ReactWhatsapp>
            </div>
           
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom:"20px"}}>  
                       
                    <p></p>
                    
                </div>
            
                
                
                
            </div>
      
 

            <div className="col-md-6 mb-5 d-flex align-items-center text-center ">
                <div class="shadow-lg p-5 mb-10 mx-5 bg-white rounded  align-items-center text-center">
                
                <h1 className='text-decoration-underline background-red text-center'>{title}</h1>
                <h6 className="text-center">Offer by: {institute}</h6>
                <p className='text-center'><p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p></p>
                <p className='text-center'>Total Enrolled: {totalRate} Students</p>
                <h5 className='text-center'>Course Fee: INR <del>22999</del> {price}</h5>
                <p className='text-center'><strong>Level:Beginner</strong> {lebel}</p>
                <p>{description}</p>                                                                                                                   
                    
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
             
                <a style={{background: '#99e6ff', color:'buttontext',width:'100px', height: '40px',padding:'7px 7px 7px',margin: '10px 10px 10px 10px',font:'400 18px system-ui'}} href={payLink}>Buy Now</a>
                
                
                </div>
                </div>
                
            </div>
            
            {/* banner right part images */}
        
    
            
        </div>
      
       
   
        
    </section>
    <div className="row">
            <div className="col-lg-12 mb-1">  
    <div class="shadow-lg p-3 mb-5 mx-5 bg-white rounded m-10">
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"10px",marginTop:"10px"}}>
    
    <CardGroup>
  <Card>
   
    <Card.Body>
      <Card.Title>21 hours on-demand video</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <Card.Img variant="top" src={img} />
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Certificate of completion</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <Card.Img variant="top" src={img1}/>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Full Downloadabe Resource</Card.Title>
     
    </Card.Body>
    <Card.Footer>
    <Card.Img variant="top" src={img2} />
    </Card.Footer>
  </Card>
</CardGroup>


    </div>
    </div>
    </div>
    </div>
    <section className='container'>
    
    
    <div className="row">
            <div className="col-lg-3 mb-3">  
    <div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg1} />
  <Card.Body>
    <Card.Title>{uname1}</Card.Title>
    <Card.Text>
             {review1}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>
<div className="col-lg-3 mb-3">  
<div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg2} />
  <Card.Body>
    <Card.Title>{uname2}</Card.Title>
    <Card.Text>
      {review2}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>
<div className="col-lg-3 mb-3">  
<div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg3} />
  <Card.Body>
    <Card.Title>{uname3}</Card.Title>
    <Card.Text>
      {review3}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>
<div className="col-lg-3 mb-3">  
    <div class="shadow-lg p-3 mb-5 bg-white rounded m-20">
    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom:"20px",marginTop:"20px"}}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={uimg4} />
  <Card.Body>
    <Card.Title>{uname4}</Card.Title>
    <Card.Text>
      {review4}
    </Card.Text>
    <p>Ratings: <StarRatings rating={rating} starRatedColor='gold' starEmptyColor='#000' starDimension="16px" starSpacing="1px"></StarRatings> <strong>{rating}</strong> || Total Enrolled <strong>{totalRate}</strong></p>
  </Card.Body>
</Card>
</div>
</div>
</div>

</div>

</section>

</>

    
 );
};

export default SingleCourse;
