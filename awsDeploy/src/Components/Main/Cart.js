import React from 'react'
import NavBar from '../NavbarComp/NavBar'
import Footer from '../Footer/Footer'
import ApiHook from '../../Hooks/apiHook'
import axios from 'axios';

function Cart() {
  const [cartData,setCartData] = ApiHook('http://localhost:8000/cart');

  const handlePlus = async (cart)=>{
    const plus = await axios.patch(`http://localhost:8000/cart/updCart-quantity/${cart._id}/increment`,{
      productId:cart.productId._id
    })
    const newCart = await axios.get('http://localhost:8000/cart')
    setCartData(newCart.data)
  }

  const handleMinus = async (cart)=>{
    const plus = await axios.patch(`http://localhost:8000/cart/updCart-quantity/${cart._id}/decrement`,{
      productId:cart.productId._id
    })
    const newCart = await axios.get('http://localhost:8000/cart')
    setCartData(newCart.data)
  }
  return (
    <>
      <NavBar />
      <div className="container py-5">
        <p className="blueCol fw-bold fs-4">Shopping Cart</p>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row p-2">
              <div className="col-2">
                <div className="cartImg p-2">
                  <p className='fw-bold'>Images</p>
                </div>
              </div>
              <div className="col-4">
                <div className="cartPrice p-2">
                  <p className="text-uppercase fw-bold">Name</p>
                </div>
              </div>
              <div className="col-2">
                <div className="cartPrice p-2">
                  <p className="price fw-bold">Price</p>
                </div>
              </div>
              <div className="col-2">
                <div className="cartQuantity p-2">
                 <p className='fw-bold'>Quantity</p>
                </div>
              </div>
              <div className="col-2">
                <div className="total p-2">
                  <p className="price fw-bold">Total</p>
                </div>
              </div>
            </div>
            {
              cartData.data?.map((e) => {
                return (
                  <div className="row border-top p-2 justify-content-center align-items-center">
                    <div className="col-2">
                      <div className="cartImg p-2">
                        <img className='w-100 h-100' src={`http://localhost:8000/images/product/${e.image[0]}`} alt="" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="cartPrice p-2">
                        <p className="text-uppercase fw-bold2">{e.name}</p>
                        <p className="text-muted">{e.productId.shortDescription}</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cartPrice p-2">
                        <p className="price fw-bold2"> ₹ {e.price} /-</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cartQuantity p-2">
                        <span className='btn border border cartBtnQuantity' onClick={()=>handlePlus(e)}>+</span>
                        <span className='btn border border cartBtnQuantity' style={{ cursor: "default" }}>{e.quantity}</span>
                        <span className='btn border border cartBtnQuantity' onClick={()=>handleMinus(e)}>-</span>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="total p-2">
                        <p className="price fw-bold2"> ₹ {e.price * e.quantity} /-</p>
                      </div>
                    </div>
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

export default Cart