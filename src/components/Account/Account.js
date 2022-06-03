import React from 'react';
import contactImg from '../../Images/pngwing.com.png';
const Account = () => {
    return (
        <main>
            {/* page header banner */}
            
            <section className='container'>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        {/* Contact address */}
                        <img className='img-fluid' src={contactImg} alt="" />
                    </div>
                    <div className="col-md-6 my-5 align-items-center">
                        {/* contact form */}
                       
                       <h1>Sorry for inconvenience We are Currently Working on it! </h1>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Account;