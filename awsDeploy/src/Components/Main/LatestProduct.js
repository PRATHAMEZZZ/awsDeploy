import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import ApiHook from '../../Hooks/apiHook'
import ProductCard from './utils/ProductCard';

function LatestProduct() {
    const [latestProd] = ApiHook(`http://localhost:8000/product`)
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="latestProduct border-1 border-top py-5">
                <div className="container">
                    <h1 className='text-capitalize h4 bar mb-5'>latest Product</h1>
                    <div className="container mt-5">
                        <div className="row g-5 justify-content-evenly">
                            {
                                latestProd.data?.product.slice(0, 4).map((e) => {
                                    return (
                                        <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-up">
                                            <ProductCard data={e}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestProduct