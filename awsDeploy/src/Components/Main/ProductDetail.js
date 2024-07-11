import React from 'react'
import ApiHook from '../../Hooks/apiHook'
import NavBar from '../NavbarComp/NavBar'
import Footer from '../Footer/Footer'
import { useLocation, useNavigate, useParams } from 'react-router'
import ProductCard from './utils/ProductCard'
import axios from 'axios'

function ProductDetail() {
    const { state: { singleProduct: e } } = useLocation();
    const navigate = useNavigate();
    const [relatedProduct] = ApiHook(`http://localhost:8000/product?category=${e.category._id}`)
    const handleCart = async (productID) => {
        try {
            const cart = await axios.post(`http://localhost:8000/cart/add-cart`, {
                productId: productID
            })
        } catch (error) {
            navigate('/login')
        }
    }
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner " style={{ height: "400px" }}>
                                {e.productImage.map((Img, i) => {
                                    return (
                                        <div class={`carousel-item ${i === 0 ? 'active' : ''} h-100 w-100`}>
                                            <img className='h-100 w-100 d-block' src={`http://localhost:8000/images/product/${Img}`} alt="..." />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div class="carousel-indicators mx-2" style={{ position: "static" }}>
                            <div className="row">
                                {
                                    e.productImage.map((e, i) => <div className="col-4">
                                        <img className={`h-100 w-100 opacity-100`} src={`http://localhost:8000/images/product/${e}`} alt="" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} />
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="container py-5">
                            <h2>{e.name}</h2>
                            <p className="fw-bold fs-3">₹ {e.price}</p>
                            <p className="my-2 fs-5 text-muted">{e.shortDescription}</p>
                            <p className="my-3 text-muted">{e.description}</p>
                            <p>
                                <span className='text-uppercase'>AVAILABILITY</span> :
                                <span className='fw-bold2 text-capitalize'> {e.stockStatus}</span>
                            </p>
                            <p className="mt-1">
                                <span className='text-uppercase'>categories</span> : {e.category.name} | {e.subCategory.name}
                            </p>
                            <div className="border-top mt-4 pt-4">
                                <button className='btn bgBlue text-white fw-bold px-3 py-2 rounded-pill'>Buy Now</button>
                                <button className='btn border border-dark fw-bold ms-3 px-3 py-2 rounded-pill' onClick={()=>handleCart(e._id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relatedProduct my-5">
                    <h4 className='bar'>Related product</h4>
                    <div className="row justify-content-around mt-5">
                        {
                            relatedProduct.data?.product.map((e) => {
                                return (
                                    <div className="col-3">
                                        <ProductCard data={e} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail