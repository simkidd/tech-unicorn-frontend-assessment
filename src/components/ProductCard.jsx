import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {MdAddShoppingCart} from 'react-icons/md'
import { Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component'

const ProductCard = ({product}) => {
  return (
    <>
      <div className="flex flex-col shadow-md items-center overflow-hidden rounded-[5px] pb-4">
        <div className="w-full h-[230px] flex items-center justify-center relative group">
          <img src={product.image} className='object-contain w-full h-[180px] group-hover:scale-[0.9] duration-300' alt='' />
          <span className="absolute top-3 right-3 bg-white rounded-[50%] p-1">
            <AiOutlineHeart size={20} className="text-[var(--color-50)]" />
          </span>
          <span className="absolute top-[3.6rem] right-[-1.8rem] group-hover:right-3 duration-300">
              <Link className="bg-white rounded-[50%] p-1">
                <MdAddShoppingCart size={20} className="text-[var(--color-50)]" />
              </Link>
          </span>
        </div>
        <div className="text-center">
          <p className="text-[14px] text-[var(--color-50)] py-1">{product.category}</p>
          <h5 className="text-[20px] pb-1">{product.title.substring(0,20)}...</h5>
          <span className='w-full flex items-center justify-center pb-1'>
          <ReactStars
            count={5}
            size={24}
            value={product.rating.rate}
            edit={false}
            activeColor='#ffd700'
            
           />
          </span>
          <p className="text-[18px] font-bold pb-2 text-[var(--color-50)]">${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
