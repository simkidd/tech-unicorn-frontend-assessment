import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Meta from "../components/Meta";
import { MdOutlineCheckCircleOutline, MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import {HiChevronDown} from 'react-icons/hi'
import Testimonials from "../components/Testimonials";
import Rating from "@mui/material/Rating";
import RelatedItems from "../components/RelatedItems";


const SingleProduct = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <>
      <Meta title={product.title} />
      <div>
        {/* title and breadcrumb */}
        <div className="w-full flex md:flex-row flex-col md:pl-[104px]">
          <div className="w-full md:pt-[136px] pt-[20px] md:px-0 px-[20px]">
            <div className="flex flex-col gap-3">
              <p className="text-[16px] font-merriweather text-[#333333] leading-[28.8px] tracking-[0.5%]">
                <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt;{" "}
                <span>{product.category}</span> &gt;{" "}
                <span className="text-gray-400">{product.title}</span>
              </p>
              <h2 className="md:text-[38px] text-[28px] font-[700]  tracking-[0.5%] text-[#11142d] font-merriweather ">
                {product.title}
              </h2>
            </div>
          </div>
          {/* title banner */}
          <div>
            <div className="md:w-[608px] w-full md:h-[400px] h-[300px] bg-[var(--placeholder)] flex items-center justify-center ">
              Image is here.
            </div>
          </div>
        </div>
        {/* breadcrumb ends here */}
        {/* product */}
        <div className="w-full md:py-[160px] py-[80px] md:px-[104px] px-[20px]">
          {/* top row */}
          <div className="flex md:flex-row flex-col gap-[40px] box-border pb-[40px]">
            {/* product image */}
            <div className="w-full">
              <div className="md:w-[592px] w-full md:h-[440px] h-[340px] box-border flex gap-[16px]">
              {/* small images */}
                <div className="md:w-[128px] w-[100px] h-full flex flex-col gap-[18px]">
                  <div className="w-full h-[71.5px] md:h-[96.5px] border">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full scale-90 object-contain"
                    />
                  </div>
                  <div className="w-full h-[71.5px] md:h-[96.5px] border">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full scale-90 object-contain"
                    />
                  </div>
                  <div className="w-full h-[71.5px] md:h-[96.5px] border">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full scale-90 object-contain"
                    />
                  </div>
                  <div className="w-full h-[71.5px] md:h-[96.5px] border">
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full scale-90 object-contain"
                    />
                  </div>
                </div>
                {/* large image */}
                <div className="w-full border">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full scale-75 object-contain"
                  />
                </div>
              </div>
            </div>
            {/* product details */}
            <div className="w-full">
              <div className="flex flex-col">
                <h5 className="font-[700] font-merriweather text-[28px] tracking-[0.5%]  text-[#11142d] pb-[18px] ">
                  {product.title}
                </h5>
                <div className="flex flex-col">
                  <p className="flex items-center text-[16px] font-merriweather text-[#515151] leading-[19.2px] tracking-[0.5%] font-[400] gap-4 pb-[20px]">
                    <span className="font-[700] text-[16px] font-merriweather leading-[19.2px] tracking-[0.5%] text-[#11142d] ">
                      Availability:
                    </span>
                    48 in stocks
                  </p>
                  <p className="flex items-center gap-4">
                    <Rating
                      value={product.rating?.rate}
                      readOnly
                      size="small"
                    />
                    <span>{product.rating?.count}</span>
                  </p>
                  <p className="text-[var(--color-50)] font-[700] text-[24px] tracking-[0.5%] leading-[46.8px] font-merriweather flex py-[20px]">
                    ${product.price}
                    <span></span>
                  </p>
                  <p className="flex items-center font-dmsans leading-[20px] tracking-[0.5%] text-[#66666] text-[16px] gap-8">
                    <span className="font-[700] text-[16px] leading-[19.2px] tracking-[0.5%] text-[#11142d] font-merriweather ">
                      Category:
                    </span>
                    {product.category}
                  </p>
                </div>
                <div className="flex items-center gap-[72px] my-[30px]">
                  <div className="w-[153px] h-[40px] flex items-center relative ">
                    <select
                      className="border outline-none rounded-[8px]  text-[16px] font-dmsans leading-[19.2px] tracking-[0.5%] pl-[16px] pr-[16px] appearance-none w-full h-full bg-transparent"
                      placeholder="Select"
                    >
                      <option>Select Size</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <HiChevronDown size={20} className="absolute right-[16px]" />
                  </div>
                  <div className="flex items-center w-[110px] h-[33px] justify-evenly">
                    <button className="flex items-center justify-center rounded text-[16px] font-[400] font-dmsans text-[#11142d] tracking-[0.5%] leading-[20px] w-full h-full bg-transparent border-none cursor-pointer">
                      -
                    </button>
                    <span className="flex items-center justify-center text-[16px] font-[400] font-dmsans text-[#11142d] tracking-[0.5%] leading-[20px] w-full h-full ">
                      2
                    </span>
                    <button className="flex items-center justify-center text-[16px] font-[400] font-dmsans text-[#11142d] tracking-[0.5%] leading-[20px] rounded w-full h-full bg-transparent border-none cursor-pointer">
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-[var(--color-50)] flex items-center justify-center rounded-[8px] text-white border-[var(--color-50)] border-[2px] w-[171px] h-[56px] text-[16px] cursor-pointer">
                    Add to cart
                    <MdAddShoppingCart size={20} className="ml-2" />
                  </button>
                  <button className="bg-transparent  flex items-center justify-center rounded-[8px] text-[var(--color-50)] !border-[2px] border-[var(--color-50)] w-[56px] h-[56px] cursor-pointer">
                    <AiOutlineHeart size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#e1e1e1]" />
          {/* bottom row */}
          <div className="flex md:flex-row flex-col gap-[40px] box-border pt-[40px]">
            <div className="w-full">
              <div className="md:w-[592px] w-full">
                <h5 className="text-[24px] font-[700] font-merriweather leading-[28.8px] tracking-[0.5%] text-[#11142d] md:pb-[30px] pb-[15px]">
                  Description
                </h5>
                <p className="text-[16px] font-dmsans font-[400] leading-[20px] tracking-[0.5%] text-[#515151]">
                  {product.description}
                </p>
                
              </div>
            </div>

            <div className="w-full">
              <h5 className="text-[24px] font-[700] font-merriweather leading-[28.8px] tracking-[0.5%] text-[#11142d] md:pb-5 pb-[15px]">
                Fabric Details
              </h5>
              <ul className="md:pl-[18px] pl-0">
                <li className="flex items-center text-[14px] pb-[12px]">
                  <MdOutlineCheckCircleOutline
                    size={20}
                    className="mr-[16px] text-[var(--color-50)]"
                  />{" "}
                  100% Cotton
                </li>
                <li className="flex items-center text-[14px] pb-[12px]">
                  <MdOutlineCheckCircleOutline
                    size={20}
                    className="mr-[16px] text-[var(--color-50)]"
                  />{" "}
                  Quick Dry
                </li>
                <li className="flex items-center text-[14px] pb-[12px]">
                  <MdOutlineCheckCircleOutline
                    size={20}
                    className="mr-[16px] text-[var(--color-50)]"
                  />{" "}
                  Ties as Shoulder
                </li>
                <li className="flex items-center text-[14px]">
                  <MdOutlineCheckCircleOutline
                    size={20}
                    className="mr-[16px] text-[var(--color-50)]"
                  />{" "}
                  Accusantium doloremque
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* testimonials */}
        <div>
          <Testimonials />
        </div>
        {/* related items */}
        <div id="related-items">
          <RelatedItems products={products} />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
