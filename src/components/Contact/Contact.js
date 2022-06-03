import React from 'react';
import './Contact.css'
import contactImg from '../../Images/contact.png';

const Contact = () => {
    return (
        <main>
            {/* page header banner */}
            <section id='banner-contact'>
                <div className='text-center'>
                    <h1 className='fw-bold  display-1'>Contact Us</h1>
                    <h2 className='fw-bold  display-5'>We are happy to assist you</h2>
                </div>
            </section>
            <section className='container'>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        {/* Contact address */}
                        <img className='img-fluid' src={contactImg} alt="" />
                    </div>
                    <div className="col-md-6 my-5 align-items-center">
                        {/* contact form */}
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputName" class="form-label">Name</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Message</label>
                                <textarea type="text" class="form-control" ></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">SEND</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;