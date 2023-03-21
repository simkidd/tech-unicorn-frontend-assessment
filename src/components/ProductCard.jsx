import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export const ProductListCard=({product})=>{
  return(
    <>
      <div className="grid grid-cols-[30%_70%] shadow-md items-center  overflow-hidden rounded-[5px]  box-border">
        <div className="w-full h-full flex items-center justify-center relative group box-border overflow-hidden">
          <img
            src={product.image}
            className="object-contain w-full h-[120px] group-hover:scale-[0.9] duration-300"
            alt=""
          />
          <span className="absolute top-3 right-3 bg-white rounded-[50%] p-1">
            <AiOutlineHeart size={20} className="text-[var(--color-50)]" />
          </span>
          <span className="absolute top-[3.6rem] right-[-1.8rem] group-hover:right-3 duration-300 md:flex hidden">
            <Link className="bg-white rounded-[50%] p-1">
              <MdAddShoppingCart size={20} className="text-[var(--color-50)]" />
            </Link>
          </span>
        </div>
        <div className="flex flex-col w-full box-border p-2">
          <p className="text-[14px] text-[var(--color-50)] py-1">
            {product.category}
          </p>
          <Link className="hover:underline">
            <h5 className="text-[18px] pb-1 font-bold">
              {product.title.substring(0, 30) + "..."}
            </h5>
          </Link>
          <p className="text-[14px]">{product.description.substring(0,80) + "..."}</p>
          <span className="w-full flex items-center pb-1">
            <ReactStars
              count={5}
              size={24}
              value={product.rating.rate}
              edit={false}
              activeColor="#ffd700"
            />
          </span>
          <p className="text-[18px] font-bold pb-2 text-[var(--color-50)]">
            ${product.price}
          </p>
          
          <Link className="bg-[var(--color-50)] md:hidden mb-1 py-1 px-3 flex items-center justify-center rounded-[5px] text-white">
          Add to cart
            <MdAddShoppingCart size={20} className="ml-2"/>
          </Link>
          
        </div>
      </div>
    </>
  )
}

const ProductCard = ({ product}) => {
  
  
  return (
    <>
      <div className="flex flex-col shadow-md items-center overflow-hidden rounded-[5px] ">
        <div className="w-full h-[230px] flex items-center justify-center relative group box-border overflow-hidden">
          <img
            src={product.image}
            className="object-contain w-full h-[180px] group-hover:scale-[0.9] duration-300"
            alt=""
          />
          <span className="absolute top-3 right-3 bg-white rounded-[50%] p-1">
            <AiOutlineHeart size={20} className="text-[var(--color-50)]" />
          </span>
          <span className="absolute top-[3.6rem] right-[-1.8rem] group-hover:right-3 duration-300 md:flex hidden">
            <Link className="bg-white rounded-[50%] p-1">
              <MdAddShoppingCart size={20} className="text-[var(--color-50)]" />
            </Link>
          </span>
        </div>
        <div className="flex flex-col px-4 w-full">
          <p className="text-[14px] text-[var(--color-50)] py-1">
            {product.category}
          </p>
          <Link className="hover:underline">
            <h5 className="text-[18px] pb-1 font-bold">
              {product.title.substring(0, 20) + "..."}
            </h5>
          </Link>
          <span className="w-full flex items-center pb-1">
            <ReactStars
              count={5}
              size={24}
              value={product.rating.rate}
              edit={false}
              activeColor="#ffd700"
            />
          </span>
          <p className="text-[18px] font-bold pb-2 text-[var(--color-50)]">
            ${product.price}
          </p>
          <Link className="bg-[var(--color-50)] md:hidden py-1 px-3 flex items-center justify-center rounded-[5px] text-white pb-1">
          Add to cart
            <MdAddShoppingCart size={20} className="ml-2"/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
