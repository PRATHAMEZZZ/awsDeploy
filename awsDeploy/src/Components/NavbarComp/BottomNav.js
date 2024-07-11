import React from 'react'
import { NavLink } from 'react-router-dom'

function BottomNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bgBlue p-0">
            <div className="container-fluid px-5">
                <p className="nav2Bottom position-relative text-uppercase hstack align-items-center bgDarkBlue py-2 px-3">
                    <i className="ri-menu-line fs-5 me-2 text-white"></i>
                    <a className="navbar-brand fw-bold2 text-white" href="#" style={{fontSize:"15px"}}>Shop By category</a>
                </p>
                <div className="collapse navbar-collapse ms-3 " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2  mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/AllProduct'} className="nav-link active text-white" aria-current="page" href="#">All Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Account</a>
                        </li>
                    </ul>
                    <div className="d-flex text-white">
                        <p className='me-3 hstack align-items-center' style={{ fontSize: "12px" }}><i className="ri-phone-line fs-5 me-2"></i> +01 23456789</p>
                        <p className=' hstack align-items-center' style={{ fontSize: "12px" }}><i className="ri-mail-line fs-5 me-2"></i> kalles@domain.com</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default BottomNav