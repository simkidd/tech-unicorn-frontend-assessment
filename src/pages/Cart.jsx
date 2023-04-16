import React, { useContext } from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import CartContext from "../contexts/cart/CartContext";
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'
import EmptyCart from '../assets/images/empty-cart.jpg'


const Cart = () => {
  //extract these functions from the CartContext
  const { cartItems, removeItemFromCart, increaseQuantity, decreaseQuantity, clearCart } =
    useContext(CartContext);

  return (
    <>
      <Meta title={"Shopping Cart"} />
      <div>
        {/* title and breadcrumb */}
        <div className="w-full flex md:flex-row flex-col md:pl-[104px] ">
          <div className="w-full md:pt-[136px] pt-[20px] md:px-0 px-[20px]">
            <div className="flex flex-col gap-3 ">
              <p className="text-[16px] font-merriweather text-[#333333] leading-[28.8px] tracking-[0.5%]">
                <Link to="/">Home</Link> &gt;{" "}
                <span className="text-gray-400">Shopping Cart</span>
              </p>
              <h2 className="md:text-[38px] text-[28px] font-[700]  tracking-[0.5%] text-[#11142d] font-merriweather ">
                Shopping Cart
              </h2>
            </div>
          </div>
          {/* title banner */}
          <div>
            <div className="md:w-[920px] w-full md:h-[400px] h-[300px] bg-[var(--placeholder)] flex items-center justify-center ">
              Image is here.
            </div>
          </div>
        </div>
        {/* breadcrumb ends here */}
        {/* cart */}
        <div className="md:px-[104px] px-[20px] md:py-[160px] py-[80px]">
          <h2 className="md:text-[38px] text-[28px] font-[700] font-merriweather leading-[57.6px] tracking-[0.5%] ">
            Cart <span>({cartItems.length})</span>
          </h2>
          {cartItems.length === 0 ? (
            <div className="w-full h-[400px]">
              <img
                src={EmptyCart}
                alt=""
                className="object-contain w-full h-full"
              />
              <h1 className="text-center font-[700] text-5xl">Cart is empty</h1>
            </div>
          ) : (
            <div className="flex md:flex-row flex-col">
              <div className="w-full">
                {/* cart item list */}
                <>
                  {cartItems.map((product) => (
                    <div className="w-full h-[150px] overflow-hidden">
                      <div className="flex w-full">
                        <div>
                          <div className="h-[150px] w-[150px] box-border ">
                            <img
                              src={product.image}
                              alt=""
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="flex flex-col">
                            <div>{product.title}</div>
                            <div>{product.price}</div>
                            {/* <div>Qty: {product.quantity}</div> */}
                            <div>Qty: {product.quantity * product.price}</div>

                            <div className="flex gap-4">
                              <button onClick={() => decreaseQuantity(product)}>
                                <BiMinus/>
                              </button>
                              <p>{product.quantity}</p>
                              <button onClick={() => increaseQuantity(product)}>
                                <BsPlus/>
                              </button>
                              <button onClick={() => removeItemFromCart(product)}>
                                <FaTrash/>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              </div>
              {/* coupon, total and checkout */}
              <div>
                <div className="md:w-[400px] w-full">
                  <div className="bg-[var(--color-10)] rounded-[8px] flex flex-col py-[30px] px-[30px]">
                    <h5 className="text-[20px] font-merriweather font-[700] leading-[28.8px] tracking-[0.5%] text-[#11142d] pb-[28px]">
                      Have a Coupon?
                    </h5>
                    <input
                      className="border border-[var(--color-50)] rounded-[8px] h-[56px] mb-[40px] px-[24px] text-[16px] leading-[20px] tracking-[0.5%] placeholder:text-[#9a9ab0] bg-transparent"
                      type="text"
                      placeholder="Voucher code"
                    />
                    <div>
                      <button className="bg-[var(--color-50)] w-[110px] h-[56px] text-[#fff] leading-[19.2px] tracking-[0.5%] rounded-[8px] ">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="font-[700] text-[16px] leading-[19.2px] tracking-[0.5%] text-[#11142d] font-merriweather flex items-center justify-between py-[24px]">
                      Subtotal
                      <span className="text-[16px] font-[400] leading-[20px] tracking-[0.5%] font-dmsans text-[#515151] ">
                        $150
                      </span>
                    </p>
                    <p className="font-[700] text-[16px] leading-[19.2px] tracking-[0.5%] text-[#11142d] font-merriweather flex items-center justify-between pb-[24px]">
                      Shipping
                      <span className="text-[16px] font-[400] leading-[20px] tracking-[0.5%] font-dmsans text-[#515151] ">
                        Free shipping
                      </span>
                    </p>
                    <p className="font-[700] text-[16px] leading-[19.2px] tracking-[0.5%] text-[#11142d] font-merriweather flex items-center justify-between ">
                      TOTAL
                      <span className="text-[16px] font-[700] leading-[20px] tracking-[0.5%] font-dmsans text-[#11142d] ">
                        $350
                      </span>
                    </p>
                    <button className="w-full h-[56px] bg-[var(--color-50)] rounded-[8px] text-white mt-[46px]">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
