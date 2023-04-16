import React, {useContext} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CartContext from '../contexts/cart/CartContext';

export const ProductListCard = ({ product }) => {
  //extract these functions from the CartContext
  const {addToCart, cartItems} = useContext(CartContext)

  return (
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
            <button className="bg-white rounded-[50%] p-1"
            onClick={()=>addToCart(product)}>
              <MdAddShoppingCart size={20} className="text-[var(--color-50)]" />
            </button>
          </span>
        </div>
        <div className="flex flex-col w-full box-border p-2">
          <p className="text-[14px] text-[var(--color-50)] py-1">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`} className="hover:underline">
            <h5 className="text-[18px] pb-1 font-bold">
              {product.title.substring(0, 30) + "..."}
            </h5>
          </Link>
          <p className="text-[14px]">
            {product.description.substring(0, 80) + "..."}
          </p>
          <span className="w-full flex items-center pb-1">
            <Rating value={product.rating.rate} readOnly size="small" />
          </span>
          <p className="text-[18px] font-bold pb-2 text-[var(--color-50)]">
            ${product.price}
          </p>

          <button className="bg-[var(--color-50)] md:hidden mb-1 py-1 px-3 flex items-center justify-center rounded-[5px] text-white"
          onClick={()=>addToCart(product)}>
            Add to cart
            <MdAddShoppingCart size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ product }) => {
   //extract these functions from the CartContext
   const {addToCart, cartItems} = useContext(CartContext)

  return (
    <>
      <div className="flex flex-col items-center overflow-hidden md:w-[296px] h-[449px]">
      {/* image container */}
        <div className="w-full h-[296px] flex items-center justify-center relative group box-border overflow-hidden mb-[20px]">
          <img
            src={product.image}
            className="object-contain w-full h-[180px] group-hover:scale-[0.9] group-hover:opacity-[0.9] duration-300"
            alt=""
          />
          <span className="absolute top-4 right-4 bg-white rounded-[50%] w-[40px] h-[40px] flex items-center justify-center">
            <AiOutlineHeart size={24} className="text-[var(--color-50)] items-center" />
          </span>
          <span className="absolute top-[4.5rem] right-[-3rem] group-hover:right-4 duration-300 md:flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-white hidden overflow-hidden">
            <button className='w-full h-full flex items-center justify-center'  
            onClick={()=>addToCart(product)}>
              <MdAddShoppingCart size={24} className="text-[var(--color-50)]" />
            </button>
          </span>
        </div>
        {/* image container end */}
        {/* product details */}
        <div className="flex flex-col items-center w-full">
          <p className="text-[14px] font-dmsans font-[500] text-[var(--color-50)] pb-[8px] leading-[18.2px] tracking-[0.8%]">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`} className="mb-[17px]">
            <h5 className="text-[18px] font-[700] tracking-[0.5%] leading-[28.8px] font-merriweather text-[#11142d]">
              {product.title.substring(0, 20) + "..."}
            </h5>
          </Link>
          <span>
            <Rating value={product.rating.rate} readOnly size="small" />
          </span>
          <p className="text-[24px] font-merriweather font-[700] text-[var(--color-50)] md:pt-[18px] pt-[5px] pb-[10px] tracking-[0.5%] leading-[28.8px]">
            ${product.price}
          </p>
          <button className="bg-[var(--color-50)] md:hidden py-1 px-3 flex items-center justify-center rounded-[5px] text-white pb-1 w-full h-[40px] font-dmsans" 
          onClick={()=>addToCart(product)}>
            Add to cart
            <MdAddShoppingCart size={20} className="ml-2" />
          </button>
        </div>
        {/* details end */}
      </div>
    </>
  );
};

export default ProductCard;
