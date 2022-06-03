import React from 'react';
import './HomeOutComes.css'
// import images
import outcomes from '../../Images/outcomes.png'
const HomeOutCome = () => {
    return (
        <section id='home-outcomes'>
            <div className='container'>
                <div className="row">
                    {/* images area */}
                    <div className="col-md-6">
                        <img src={outcomes} className='img-fluid' alt="" />
                    </div>
                    {/* text area */}
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className='display-5 pb-3'>Learner outcomes on Learn Without Limits</h1>
                            <p className='pt-3'><b>87% of people learning</b> for professional development <br className='d-none d-lg-block' /> <b>report career benefits</b> like getting a promotion, a raise, or starting a new career</p>
                            <strong>- Learn Without Limit Impact Report (2021)</strong><br />
                            <button className='btn btn-primary px-4 py-2 mt-5'>Join for Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOutCome;