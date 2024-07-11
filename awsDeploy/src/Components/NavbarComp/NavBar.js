import { NavLink, useNavigate } from "react-router-dom"
import BottomNav from "./BottomNav"
import Search from "./Search"
import { useEffect, useState } from "react"

function NavBar() {
    const [logoutStatus, setLogoutStatus] = useState(false)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userData")
        if(!localStorage.getItem("userData")){
            setLogoutStatus(false)
            navigate('/')
        }
    }

    useEffect(() => {
        if(localStorage.getItem('userData')){
            setLogoutStatus(true)
        }
    },[])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid px-5 py-3">
                    <NavLink to={'/'} className="navbar-brand fs-3 fw-bold text-uppercase" href="#">moglix</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ri-menu-line text-dark"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <div className="" href="#"></div>

                        <Search />

                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">
                                    <p className="hstack m-0 fw-bold2"><i className="ri-shopping-cart-2-line text-dark fs-5 me-2"></i><span>Cart</span></p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {
                                    JSON.parse(localStorage.getItem('userData'))?
                                        <p className="hstack text-uppercase align-items-center m-0 fw-bold2"><i className="ri-account-circle-fill text-dark fs-5 me-2"></i><span>{JSON.parse(localStorage.getItem('userData')).user.firstName}</span></p>
                                        :
                                        <NavLink className="nav-link" to={'/login'}>
                                            <p className="hstack align-items-center m-0 fw-bold2"><i className="ri-account-circle-fill text-dark fs-5 me-2"></i><span>Login</span></p>
                                        </NavLink>
                                }
                            </li>
                            {logoutStatus && <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleLogout}>
                                    <p className="hstack m-0 fw-bold2"><i class="ri-logout-circle-r-line fs-5 me-1 text-dark"></i><span>Logout</span></p>
                                </a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
            <BottomNav />
        </>
    )
}

export default NavBar