import React from 'react';

const NotFound = () => {
    return (
        <main style={{ padding: '50px 0', height: '100vh' }}>
            <section className='text-center my-5'>
                <p>Whoops... Looks like something <strong>got lost...</strong></p>
                <div className='d-lg-flex justify-content-center'>
                    <h1 style={{ fontSize: '12em', color: '#A8A8A8', marginRight: '40px' }}>LOST</h1>
                    <img src="https://www.000webhost.com/static/default.000webhost.com/images/404.png" alt="" />
                </div>

                <p className='mt-5'>Make sure you're on the right path. Probably the page you're looking for has moved.</p>
            </section>
        </main>
    );
};

export default NotFound;