import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';

function ProductCard({ data }) {
    let [imageChange, setImageChange] = useState(0);
    const navigate = useNavigate();
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
        <div class="card ProductCard border-0 " onMouseOver={() => setImageChange(1)} onMouseLeave={() => setImageChange(0)}>
            <div className="cardImg position-relative">
                <img className="w-100" style={{ height: "230px" }} src={`http://localhost:8000/images/product/${data.productImage[imageChange]}`} alt="" />
                <div className="position-absolute quickViewBtn text-center bgBlue py-2 w-100">
                    <p className='fw-bold2'>
                        <NavLink to={`/product/${data.name}/${data._id}`} state={{ singleProduct: data }} className='nav-link text-white'>Quick View</NavLink>
                    </p>
                </div>
                <div className="addCartBtn position-absolute m-3">
                    <p className='bg-white border py-2 px-3 rounded-circle' onClick={() => handleCart(data._id)}><i class="ri-shopping-bag-line fs-4"></i></p>
                </div>
            </div>
            <div class="card-body py-2 px-0">
                <p className='text-capitalize fw-bold2 mb-1'>{data.name}</p>
                <p className="productSortDesc">{data.shortDescription}</p>
                <p className="text-muted">
                    <span>{data.category.name}</span>
                    <span className="text-dark"> | </span>
                    <span>{data.subCategory.name}</span>
                </p>
                <p className='fw-bold2 mt-2'>₹ {data.price}/-</p>
            </div>
        </div>
    )
}

export default ProductCard