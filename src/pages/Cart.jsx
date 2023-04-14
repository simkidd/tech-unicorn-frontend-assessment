import React from "react";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={"Shopping Cart"} />
      <div>
        {/* title and breadcrumb */}
        <div className="w-full flex pl-[104px]">
          <div className="w-full pt-[136px]">
            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-merriweather text-[#333333] leading-[28.8px] tracking-[0.5%]">
                <Link to="/">Home</Link> &gt;{" "}
                <span className="text-gray-400">Shopping Cart</span>
              </p>
              <h2 className="text-[40px] font-[700] leading-[57.6px] tracking-[0.5%] text-[#11142d] font-merriweather ">
                Shopping Cart
              </h2>
            </div>
          </div>
          {/* title banner */}
          <div>
            <div className="w-[920px] h-[400px] bg-[var(--placeholder)] flex items-center justify-center ">
              Image is here.
            </div>
          </div>
        </div>
        {/* breadcrumb ends here */}
        {/* cart */}
        <div className="px-[104px] py-[160px]">
          <h2 className="text-[48px] font-[700] font-merriweather leading-[57.6px] tracking-[0.5%] ">
            Cart
          </h2>
          <div className="flex">
            <div className="w-full">
              <div>products in cart</div>
            </div>
            <div>
              <div className="w-[400px]">
                <div className="bg-[var(--color-10)] rounded-[8px] flex flex-col py-[30px] px-[30px]">
                  <h5 className="text-[24px] font-merriweather font-[700] leading-[28.8px] tracking-[0.5%] text-[#11142d] pb-[28px]">
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
                  <p className="font-[700] text-[16px] leading-[19.2px] tracking-[0.5%] text-[#11142d] font-merriweather flex items-center justify-between pb-[24px]">
                    Subtotal<span className="text-[16px] font-[400] leading-[20px] tracking-[0.5%] font-dmsans text-[#515151] " >$150</span>
                  </p>
                  <p className="font-[700] text-[16px] leading-[19.2px] tracking-[0.5%] text-[#11142d] font-merriweather flex items-center justify-between pb-[24px]">
                    Shipping<span className="text-[16px] font-[400] leading-[20px] tracking-[0.5%] font-dmsans text-[#515151] " >Free shipping</span>
                  </p>
                  <p className="font-[700] text-[16px] leading-[19.2px] tracking-[0.5%] text-[#11142d] font-merriweather flex items-center justify-between ">
                    TOTAL<span className="text-[16px] font-[700] leading-[20px] tracking-[0.5%] font-dmsans text-[#11142d] " >$350</span>
                  </p>
                  <button>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
