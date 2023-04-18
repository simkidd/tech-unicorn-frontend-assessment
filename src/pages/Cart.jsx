import React, { useContext } from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import EmptyCartImage from "../assets/images/empty-cart.jpg";
import CartItem from "../components/CartItem";

const Cart = () => {
  //extract these functions from the CartContext
  const { cart, total, clearCart } = useContext(CartContext);

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

        {cart.length === 0 ? (
          <div className="w-full py-[80px] md:py-[160px] h-screen flex items-center justify-center">
            <div className="flex flex-col">
              <img
                src={EmptyCartImage}
                alt="empty cart"
                className="w-[400px]"
              />
              <h1 className="text-center font-[700] text-5xl">Cart is empty</h1>
            </div>
          </div>
        ) : (
          // {/* cart */}
          <div className="md:px-[104px] px-[20px] md:py-[160px] py-[80px]">
            <h2 className="md:text-[38px] text-[28px] font-[700] font-merriweather leading-[57.6px] tracking-[0.5%] ">
              Cart <span>({cart.length})</span>
            </h2>
            <button onClick={clearCart}>Clear Cart</button>
            <div className="flex md:flex-row flex-col">
              <div className="w-full">
                {/* cart item list */}
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                {/* cart item list end */}
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
                        ${parseFloat(total).toFixed(2)}
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
                        ${parseFloat(total).toFixed(2)}
                      </span>
                    </p>
                    <button className="w-full h-[56px] bg-[var(--color-50)] rounded-[8px] text-white mt-[46px]">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
