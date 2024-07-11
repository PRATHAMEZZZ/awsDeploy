import React, { useEffect, useMemo, useState } from 'react'
import NavBar from '../../NavbarComp/NavBar'
import Footer from '../../Footer/Footer'
import ProductCard from '../utils/ProductCard'
import ApiHook from '../../../Hooks/apiHook'

function AllProduct() {
    const [filterData, setFilterData] = useState({
        sortBy: "createdAt",
        price:''
    })
    const [productData] = ApiHook(`http://localhost:8000/product?sortBy=${filterData.sortBy}`, filterData)
    const sortPrice = [
        {
            gte: 0,
            lte: 501
        },
        {
            gte: 501,
            lte: 1000
        },
        {
            gte: 1001,
            lte: 2500
        },
        {
            gte: 2501,
            lte: 5000
        },
        {
            gte: 5001,
            lte: 10000
        },
        {
            gte: 10001
        }
    ]

    function handlePriceChange(e,price){
        e.target.checked ? setFilterData({...filterData,price:price}) : setFilterData({...filterData,price:''})
    }
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="row justify-content-between">
                    <div className="col-2">
                        <div className="container">
                            <button className="hstack btn border border-1 text-muted text-uppercase align-items-center" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <i class="ri-equalizer-line me-2 fs-5"></i>Filter
                            </button>
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>

                                <div class="offcanvas-body">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filterPrice container">
                                        <p className='text-uppercase fw-bold my-4'>Price</p>
                                        {
                                            sortPrice.map((price) => {
                                                return (
                                                    <>
                                                        <div class="form-check mb-2">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => handlePriceChange(e,price)} />
                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                ₹{price.gte} - ₹{price.lte || ' *'}
                                                            </label>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='Sort row justify-content-center align-items-center'>
                            <div className="col-4">
                                <p className='text-end'>Sort By :-</p>
                            </div>
                            <div className="col-8 p-0">
                                <select class="form-select" aria-label="Default select example" onChange={(e) => setFilterData({ ...filterData, sortBy: e.target.value })}>
                                    <option selected>sort by createdAt</option>
                                    <option value="-price">Sort by Price high to low</option>
                                    <option value="price">Sort by Price low to high</option>
                                    <option value="name">Sort by Name</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="allProduct my-5">
                    <div className="row row-cols-lg-4 g-5">
                        {
                            productData.data?.product.map((e) => {
                                return (
                                    <ProductCard data={e} />
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

export default AllProduct