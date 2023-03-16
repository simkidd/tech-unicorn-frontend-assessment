import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {MdAddShoppingCart} from 'react-icons/md'
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="flex flex-col items-center overflow-hidden ">
        <div className="w-full h-[250px] bg-[var(--placeholder)] relative group">
          img
          <span className="absolute top-3 right-3 bg-white rounded-[50%] p-1">
            <AiOutlineHeart size={18} className="text-[var(--color-50)]" />
          </span>
          <div className="absolute top-11 right-[-1.8rem] group-hover:right-3 transition-[0.3s]">
            <div className="flex flex-col gap-2">
              <Link className="bg-white rounded-[50%] p-1">
                <MdAddShoppingCart size={18} className="text-[var(--color-50)]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[14px] text-[var(--color-50)] py-1">Bags</p>
          <h5 className="text-[24px] pb-4">Queen's Summer</h5>
          <p className="text-[14px] pb-4">Medium Shoulder Bag</p>
          <p className="text-[29px] text-[var(--color-50)]">$1000</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
