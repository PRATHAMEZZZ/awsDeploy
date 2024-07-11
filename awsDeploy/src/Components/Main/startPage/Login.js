import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
    const [loginData,setLoginData] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    function handleInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }
    async function handleLogin(e){
        e.preventDefault();
        const userData = await axios.post('http://localhost:8000/user/logIn',loginData);
        localStorage.setItem("userData",JSON.stringify(userData.data))
        navigate('/')
    }
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
                                            <p className="fs-3 fw-bold">Login</p>
                                            <div class="mb-3">
                                                <label for="email" class="form-label">Email address</label>
                                                <input type="email" class="form-control" onChange={handleInput} name="email" placeholder="name@example.com" style={{ background: "#f5f5f5" }} />
                                            </div>
                                            <div class="mb-3">
                                                <label for="password" class="form-label">Password</label>
                                                <input type="password" class="form-control" onChange={handleInput} name="password" placeholder="password" style={{ background: "#f5f5f5" }} />
                                            </div>
                                            <div className="my-4">
                                                <button className='btn btn-success py-2 w-100' onClick={handleLogin}>Login</button>
                                            </div>
                                            <hr />
                                            <div className="mb-3 mt-4 bg-grey rounded-3 bg-light">
                                                <p className='p-3 btn fb fw-bold d-flex justify-content-center align-items-center'><i class="fa-brands fs-5 me-3  fa-facebook"></i> Login with Facebook</p>
                                            </div>
                                            <div className="mb-3 bg-grey rounded-3 bg-light">
                                                <p className='p-3 btn google fw-bold d-flex justify-content-center align-items-center'><i class="fa-brands fs-5 me-3  fa-google"></i> Login with Google</p>
                                            </div>
                                            <p><NavLink className="text-success mb-3 nav-link p-0">Forget your password</NavLink></p>
                                            <p><NavLink className="text-success mb-3 nav-link p-0" to={'/signup'}>Create account</NavLink></p>
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

export default Login