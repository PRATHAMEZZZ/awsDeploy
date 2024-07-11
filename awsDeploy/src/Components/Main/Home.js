import React, { useEffect } from 'react'
import NavBar from '../NavbarComp/NavBar'
import Carousal from './Carousal'
import LatestProduct from './LatestProduct'
import Footer from '../Footer/Footer'
import FeaturedColl from './FeaturedColl'

function Home() {
    const supportArr = [
        {
            img: 'https://cdn.shopify.com/s/files/1/0641/8690/8910/files/free-delivery-64-px-2x_120x_8320613e-dd7e-48d8-a037-0b9e5b87825a.png?v=1652775864&width=180',
            title: 'free shipping',
            desc: 'Free shipping on all order or order above 1000'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0641/8690/8910/files/parcel-tracking-64-px-2x_120x_9e5751df-bb80-4098-bed2-a405808306bf.png?v=1652775881&width=180',
            title: 'SUPPORT 24/7',
            desc: 'Contact us 24 hours a day 7 days a week'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0641/8690/8910/files/icon-128x128_120x_1.png?v=1652775909&width=180',
            title: '30 DAYS RETURN',
            desc: 'Simply return it within 30 days for an exchange.'
        }
    ]
    return (
        <>
            <NavBar />
            <Carousal />
            <div className="border-top">
                <div className="container my-3">
                    <div className="row justify-content-around">
                        {
                            supportArr.map((e, i) => {
                                return (
                                    <div className="col-lg-4 col-md-4 col-sm-12" key={i}>
                                        <div className="support text-center px-5 py-4">
                                            <div className='supportImgDiv'>
                                                <img className='w-25 h-100' src={e.img} alt="" />
                                            </div>
                                            <p className='fw-bold text-uppercase my-2'>{e.title}</p>
                                            <p className='text-muted'>{e.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <LatestProduct />
            <FeaturedColl />
            <Footer />
        </>
    )
}

export default Home