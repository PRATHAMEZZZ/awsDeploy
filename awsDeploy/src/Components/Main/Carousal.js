import React, { useState } from 'react'

function Carousal() {
    let [index, setIndex] = useState(0);
    const carousalsDivs = [
        <div className='w-100 h-100 carousalImage' style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0611/6963/1389/files/banner2_2716e7e5-7698-4d0f-bc32-19df640b9021.jpg?v=1651824484&width=3840')" }}>
            <div className="container position-absolute" style={{ top: '30%', left: "5%" }}>
                <p className="fs-5">Featured Items</p>
                <p className="display-4 fw-bold mt-2 mb-4">Koppal 44mm hand wear</p>
                <button className='btn btn-dark px-4 py-3 fs-5 fw-bold2 text-white' style={{ borderRadius: "50px" }}>Shop Now</button>
            </div>
        </div>,
        <div className='w-100 h-100 carousalImage' style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0611/6963/1389/files/banner1_51c4880a-473e-4e8d-a57c-7ac85672bfcf.jpg?v=1651824484&width=1800')" }}>
            <div className="container position-absolute" style={{ top: '30%', left: "5%" }}>
                <p className="fs-5">Modern Design</p>
                <p className="display-4 fw-bold mt-2 mb-4">Zuo Pure Collection <br/> Sale 50% off</p>
                <button className='btn btn-dark px-4 py-3 fs-5 fw-bold2 text-white' style={{ borderRadius: "50px" }}>Shop Now</button>
            </div>
        </div>,
        <div className='w-100 h-100 carousalImage' style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0611/6963/1389/files/banner2_2716e7e5-7698-4d0f-bc32-19df640b9021.jpg?v=1651824484&width=3840')" }}>
            <div className="container position-absolute" style={{ top: '30%', left: "5%" }}>
                <p className="fs-5">Featured Items</p>
                <p className="display-4 fw-bold mt-2 mb-4">Koppal 44mm hand wear</p>
                <button className='btn btn-dark px-4 py-3 fs-5 fw-bold2 text-white' style={{ borderRadius: "50px" }}>Shop Now</button>
            </div>
        </div>
    ]
    const carousalBtn = ["Koppal", 'Zuo Pure', 'Koppal'];
    const handleBtn = (i) => {
        setIndex(i)
        console.log(index)
    }
    return (
        <>
            <div className="corousalContainer position-relative" style={{ width: "100%", height: '100vh' }}>
                {
                    carousalsDivs.map((e, i) => {
                        return (
                            <div className="innerCarousal w-100 h-100 position-absolute" style={{ transform: `translateX(${(i * 100) - (index * 100)}%)` }}>
                                {e}
                            </div>
                        )
                    })
                }
                <div className="position-absolute" style={{bottom:"7%",left:"5%"}}>
                    {
                        carousalBtn.map((e, i) => {
                            return (
                                <p className='mb-2 hstack align-items-center carousalBtn darkBlueCol fw-bold2 ' onMouseOver={() => handleBtn(i)} style={{ cursor: "pointer" }}>{e}<i class="ri-arrow-right-circle-line text-dark ms-1"></i></p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Carousal