import React, { useState } from 'react'
import ApiHook from '../../Hooks/apiHook';
import { NavLink } from 'react-router-dom';

function Search() {
    const api = 'http://localhost:8000'
    const [categoryData] = ApiHook(`${api}/category`);
    const [searchValues, setSearchValues] = useState({
        categoryId: "",
        searchValue: "",
        searchBox: false,
    });
    const [selectName, setSelectedName] = useState({
        name: 'All categories',
        id: ''
    })
    const [productData] = ApiHook(`${api}/product?q=${searchValues.searchValue ? searchValues.searchValue : ''}&category${searchValues.categoryId ? `=${searchValues.categoryId}` : ''}`, searchValues)
    function handleChange(e) {
        const { name, value, options, selectedIndex } = e.target;
        if (options && selectedIndex) {
            setSelectedName({ ...selectName, name: options[selectedIndex].textContent, id: value })
        }
        setSearchValues({ ...searchValues, [name]: value });
    }

    function handleSearchShow() {
        setSearchValues({ ...searchValues, searchBox: true })
    }
    function handleSearchHide() {
        setSearchValues({ ...searchValues, searchBox: false })
    }
    return (
        <div className="position-relative ">
            <div className="searchBy d-flex justify-content-center" onMouseOver={handleSearchShow} onMouseLeave={handleSearchHide}>
                <div className="select">
                    <select name="categoryId" id="selectName" className='h-100 navSelect text-capitalize' onChange={handleChange}>
                        <option disabled>select categorios</option>
                        <option value=''>All categorios</option>
                        {
                            categoryData.data?.category.map((e) => {
                                return (
                                    <option value={e._id} key={e._id}>{e.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="divInput">
                    <input type="text" placeholder='Search by product' name="searchValue" value={searchValues.searchValue} className='navInput' onChange={handleChange} />
                </div>
                <button className='navBtn'>Search</button>
            </div>
            {searchValues.searchBox && <div className=" dropData position-absolute w-100" onMouseOver={handleSearchShow} onMouseLeave={handleSearchHide}>
                <div className="prodData p-4 pb-5">
                    {
                        productData.data?.product.length > 0 ? productData.data?.product?.slice(0, 5).map((e) => {
                            return (
                                <div className='row mb-4' key={e._id}>
                                    <div className="col-3">
                                        <div className="img">
                                            <img src={`${api}/images/product/${e.productImage[0]}`} alt="" className='w-100 h-100' />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="sProductconatin">
                                            <p className='fw-bold2 m-0'><NavLink to={`/product/${e.name}/${e._id}`} state={{ singleProduct: e }} className='nav-link p-0 text-dark'>{e.name}</NavLink></p>
                                            <p className=' m-0'><span>{e.category.name}</span><span className='vr mx-2'></span><span>{e.subCategory.name}</span></p>
                                            <p className="text-secondary m-0">₹ {e.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div className="row mb-4">
                            <div className="col-12">
                                <p className="fs-6 mb-4">No products were found matching your selection.</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="bg-light px-4 py-3 position-absolute start-0 bottom-0 w-100">
                    <p className="fw-bold text-capitalize" >Search for "{selectName.name}"</p>
                </div>
            </div>}
        </div>
    )
}

export default Search