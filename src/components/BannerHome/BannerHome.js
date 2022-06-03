import React from 'react';
//import banner image
import BannerImg from '../../Images/hero-b.png';
import { useHistory } from "react-router-dom";
import Typewriter from '../../../node_modules/typewriter-effect';
import ReactGA from '../../../node_modules/react-ga';


    


const BannerHome = (props) => {
    
    const history = useHistory();
    const navigateTo = () => history.push('/Profile')
    const ClickHandler = () =>{
        ReactGA.event({
            category: 'Button',
            action: 'Click this button'
        })
        
    }
    return (
        <section className='container my-lg-5'>
            <div className='row'>
                {/* banner left part text */}
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1 className='display-3 fw-bold'><Typewriter
  options={{
    strings: ['Best Learning Experience is Here'],
    autoStart: true,
    loop: true,
  }}
/></h1>
                        <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                        <button className='btn btn-primary px-5 py-3 me-2' onClick={()=>{navigateTo(); ClickHandler()}}>Join Now!</button>
                        
                    </div>
                </div>
                {/* banner right part images */}
                <div className="col-md-6 text-end pe-5">
                    <img className='img-fluid' src={BannerImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default BannerHome;