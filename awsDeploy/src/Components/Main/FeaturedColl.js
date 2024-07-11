import React from 'react'
import ApiHook from '../../Hooks/apiHook'

function FeaturedColl() {
    const [productData] = ApiHook(`http://localhost:8000/product`)
    return (
        <>
            <div className="feactureCollContainer">
                <div className="container">
                    <h2 className='text-center'>Featured Collection</h2>

                    <div className="feacturedProduct">
                        <div className="row row-cols-lg-4">
                            {
                                productData.product?.slice(0, 9).map((e) => {
                                    return (
                                        <>
                                            <div className="col">
                                                <div className="container">
                                                    
                                                </div>
                                            </div>
                                        </>
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

export default FeaturedColl