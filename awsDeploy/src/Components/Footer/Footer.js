import React from 'react'

function Footer() {
    return (
        <div className='bg-light'>
            <div className="container pt-5 pb-4">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="footerLeft">
                            <p className="fs-2 fw-bold mb-3">Moglix</p>
                            <p className="hstack align-items-center mb-2">
                                <i className="ri-map-pin-line fs-3 me-2"></i>
                                <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
                            </p>
                            <p className="hstack align-items-center mb-2">
                                <i className="ri-mail-line fs-3 me-2"></i>
                                <span>contact@company.com</span>
                            </p>
                            <p className="hstack align-items-center mb-2">
                                <i className="ri-phone-line fs-3 me-2"></i>
                                <span>+001 2233 456</span>
                            </p>
                            <p className='text-muted'>
                                <i className="ri-facebook-circle-fill fs-2 me-3"></i>
                                <i className="ri-twitter-fill fs-2 me-3"></i>
                                <i className="ri-instagram-line fs-2 me-3"></i>
                                <i className="ri-linkedin-box-fill fs-2 me-3"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="footerCenter text-capitalize">
                            <p className="fw-bold2 fs-5 mb-4">Information</p>
                            <p className="text-muted mb-3">About us</p>
                            <p className="text-muted mb-3">contact us</p>
                            <p className="text-muted mb-3">terms & conditions</p>
                            <p className="text-muted mb-3">Shipping & Delivery</p>
                            <p className="text-muted mb-3">Privacy Policy</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="footerCenter2 text-capitalize">
                            <p className="fw-bold2 fs-5 mb-4">Useful links</p>
                            <p className="text-muted mb-3">letesh news</p>
                            <p className="text-muted mb-3">My account</p>
                            <p className="text-muted mb-3">size guide</p>
                            <p className="text-muted mb-3">FQAs</p>
                            <p className="text-muted mb-3">FQAs 2</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="footerRight">
                            <p className="fw-bold2 fs-5 mb-4">Newsletter Signup</p>
                            <p className='text-muted'>Subscribe to our newsletter and get 10% off your first purchase</p>
                            <div className="input-group mt-3">
                                <input type="text" className="form-control p-2" placeholder="Recipient's username" />
                                <span className="input-group-text bgBlue text-white fw-bold" id="basic-addon2">Subcribe</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot2 hstack justify-content-between mt-5">
                    <p className="text-muted">All Rights Reserved © 2023 Kalles - Developed by The4</p>
                    <div className="">
                        <span className='me-3'>Shop</span>
                        <span className='me-3'>About Us</span>
                        <span className='me-3'>Contact Us</span>
                        <span className='me-3'>Blog</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer