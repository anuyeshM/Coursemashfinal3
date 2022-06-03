import React from 'react';
// import images
import nextStep from '../../Images/Image-Next-Step.png'
const TakeNextStep = () => {
    return (
        <section className='my-5'>
            <div className='container px-5'>
                <div className="row">
                    {/* images area */}
                    <div className="col-md-6">
                        <img className='img-fluid' src={nextStep} alt="" />
                    </div>
                    {/* text area */}
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className='display-5 pb-3'>Take the next step toward your personal and professional goals with Learn Witout Limit.</h1>
                            <p className='pt-3'>Join now to receive personalized recommendations from the full <strong>Learn Without Limit</strong> catalog.</p>
                            <button className='btn btn-primary px-4 py-2 mt-2'>Join for Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TakeNextStep;