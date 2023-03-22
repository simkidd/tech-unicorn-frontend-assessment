import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Meta from "../components/Meta";
import { MdOutlineCheckCircleOutline, MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Testimonials from "../components/Testimonials";
import Rating from "@mui/material/Rating"

const SingleProduct = () => {
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
    <div>
      <Meta title={product.title} />
      <div>
        {/* title and breadcrumb */}
        <div className="grid md:grid-cols-[60%_40%] w-full">
          <div className="flex flex-col px-[4rem] md:py-[8rem] py-[1rem] gap-3">
            <p>
              <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt;{" "}
              <span>{product.category}</span> &gt;{" "}
              <span className="text-gray-400">{product.title}</span>
            </p>
            <h2 className="text-[40px] font-[700] leading-none">{product.title}</h2>
          </div>
          <div className="border bg-[var(--placeholder)] ">Image is here.</div>
        </div>
        {/* breadcrumb ends here */}
        <div className="w-full py-[8rem] md:px-[4rem] px-[1rem]">
          {/* top row */}
          <div className="grid md:grid-cols-[55%_45%] box-border">
            <div>
              <div className="image-wrap">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="pl-8">
              <div className="flex flex-col gap-4">
                <h5 className="font-[700] text-[40px] leading-none">{product.title}</h5>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-4">
                    <span className="font-bold text-[14px]">Availability:</span>
                    48 in stocks
                  </p>
                  <p className="flex items-center gap-4">
                    <Rating 
                      value={product.rating?.rate}
                      readOnly
                      size='small'
                    />
                    <span>{product.rating?.count}</span>
                  </p>
                  <p className="text-[var(--color-50)] text-[20px] font-bold flex">
                    ${product.price}
                    <span></span>
                  </p>
                  <p className="flex items-center text-[14px] gap-8">
                    <span className="font-bold">Category:</span> 
                    {product.category}
                  </p>
                </div>
                <div className="flex items-center gap-12">
                  <select className="!border border-[var(--placeholder)]  rounded">
                    <option>Select Size</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <div className="flex items-center">
                    <button className="flex items-center justify-center border rounded w-[25px] h-[25px]">-</button>
                    <span className="flex items-center justify-center  w-[25px] h-[25px]">2</span>
                    <button className="flex items-center justify-center border rounded w-[25px] h-[25px]">+</button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-[var(--color-50)] mb-1 py-1 px-3 flex items-center justify-center rounded-[5px] text-white border-[var(--color-50)] border-[2px]">
                    Add to cart
                    <MdAddShoppingCart size={20} className="ml-2" />
                  </button>
                  <button className="bg-transparent mb-1 py-1 px-3 flex items-center justify-center rounded-[5px] text-[var(--color-50)] border-[2px] border-[var(--color-50)]">
                    Wishlist
                    <AiOutlineHeart size={20} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* bottom row */}
          <div className="grid md:grid-cols-[55%_45%] box-border py-8 ">
            <div>
              <div>
                <h5 className="text-[20px] font-bold pb-5">Description</h5>
                <p className="text-[14px]">{product.description}</p>
                <br />
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  hic quidem odit! Quae quisquam possimus dolorem! Minima
                  eligendi, necessitatibus officia aliquid architecto, officiis
                  qui alias veniam tempora eos odit expedita dolore ullam
                  excepturi odio vel possimus quidem praesentium corrupti
                  voluptate perferendis facere nostrum pariatur. Maiores
                  praesentium odit reprehenderit nostrum incidunt?
                </p>
              </div>
            </div>
            <div className="pl-8">
              <div>
                <h5 className="text-[20px] font-bold pb-5">Fabric Details</h5>
                <ul className="pl-3">
                  <li className="flex items-center text-[14px] pb-2">
                    <MdOutlineCheckCircleOutline
                      size={20}
                      className="mr-1 text-[var(--color-50)]"
                    />{" "}
                    100% Cotton
                  </li>
                  <li className="flex items-center text-[14px] pb-2">
                    <MdOutlineCheckCircleOutline
                      size={20}
                      className="mr-1 text-[var(--color-50)]"
                    />{" "}
                    Quick Dry
                  </li>
                  <li className="flex items-center text-[14px] pb-2">
                    <MdOutlineCheckCircleOutline
                      size={20}
                      className="mr-1 text-[var(--color-50)]"
                    />{" "}
                    Ties as Shoulder
                  </li>
                  <li className="flex items-center text-[14px] pb-2">
                    <MdOutlineCheckCircleOutline
                      size={20}
                      className="mr-1 text-[var(--color-50)]"
                    />{" "}
                    Accusantium doloremque
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* testimonials */}
        <div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
