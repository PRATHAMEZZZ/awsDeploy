import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
function SignUp() {
    const [postUser,setPostUser] = useState({
        name:"",
        
    })
    return (
        <div style={{ background: "#f5f5f5" }}>
            <div className="container p-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-5 p-0">
                                <div className="signLog_img h-100">
                                    <img src="./images/sl.jpeg" alt="" className="img-fluid h-100" />
                                </div>
                            </div>
                            <div className="col-5 bg-white p-0">
                                <div className="signlog_content">
                                    <form action="">
                                        <div className="p-5">
                                            <p className="fs-3 fw-bold">Create account</p>
                                            <div class="mb-3">
                                                <label for="name" class="form-label">Name</label>
                                                <input type="text" class="form-control" id="name" placeholder="name" style={{ background: "#f5f5f5" }} />
                                            </div>
                                            <div class="mb-3">
                                                <label for="email" class="form-label">Email address</label>
                                                <input type="email" class="form-control" id="email" placeholder="name@example.com" style={{ background: "#f5f5f5" }} />
                                            </div>
                                            <div class="mb-3">
                                                <label for="password" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="password" placeholder="**********" style={{ background: "#f5f5f5" }} />
                                            </div>
                                            <div class="mb-3">
                                                <label for="contact" class="form-label">Contact</label>
                                                <input type="number" class="form-control" id="contact" placeholder="contact" style={{ background: "#f5f5f5" }} />
                                            </div>
                                            <div className="my-4">
                                                <button className='btn btn-success py-2 w-100'>create account</button>
                                            </div>
                                            <hr />
                                            <div className="mb-3 mt-4 bg-light rounded-3">
                                                <p className='p-3 btn fb fw-bold d-flex justify-content-center align-items-center'><i class="fa-brands fs-5 me-3  fa-facebook"></i> Login with Facebook</p>
                                            </div>
                                            <div className="mb-3 bg-light rounded-3">
                                                <p className='p-3 btn google fw-bold d-flex justify-content-center align-items-center'><i class="fa-brands fs-5 me-3  fa-google"></i> Login with Google</p>
                                            </div>
                                            <p><NavLink className="text-success nav-link p-0" to={'/login'}>Already have an account? Login</NavLink></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp