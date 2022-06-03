import React from 'react';
import './About.css'

const About = () => {
    return (
        <main>
            {/* about banner */}
            <section id='banner-about'>
                <div className='text-center'>
                    <h1 className='fw-bold  display-1'>About Us</h1>
                    <h2 className='fw-bold  display-5'>Serving the world through learning</h2>
                </div>
            </section>
            {/* some dummy text added */}
            <section className='container my-5'>
                <h2 className='text-decoration-underline'>How we start</h2>
                <p>Learn Without Limit was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, Learn Without Limit is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. Learn Without Limit received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.</p>
                <p><b>82 million learners, 100+ Fortune 500 companies, and more than 6,000 campuses, businesses,</b> and <b>governments</b> come to Coursera to access world-class learning—anytime, anywhere.</p>
            </section>
        </main>
    );
};

export default About;