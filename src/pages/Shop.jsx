import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { BiFilterAlt } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Products from "../components/Products";

const Shop = () => {
  const [grid, setGrid] = useState(4)
 
  return (
    <div>
      <div>
        {/* title and breadcrumb */}
        <div className="grid grid-cols-[25%_75%] w-full">
          <div className="flex flex-col pl-[4rem]  py-[8rem] gap-3">
            <Breadcrumb title="Shop" />
            <h2 className="text-[48px] font-[700] ">Shop</h2>
          </div>
          <div className="border">Image is here.</div>
        </div>

        <div className="grid grid-cols-[25%_75%] w-full pt-[8rem] px-[4rem]">
          {/* sidebar */}
          <div className="">
            <div>
              <div>
                <h3>Price</h3> <BiFilterAlt />
              </div>
            </div>
            <div>color</div>
            <div>categories</div>
            <div>march discount</div>
          </div>

          {/* products list */}
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center relative ">
              <input
                type="text"
                className="w-full rounded-[4px] p-3 !outline-[var(--color-50)] !border-[#f862385b] border"
                placeholder="Search products"
              />
              <FiSearch size={20} className='absolute right-3 text-[var(--placeholder)]' />
            </div>
            <div className="flex justify-between items-center py-8 pb-[4rem]">
              <p>Showing results</p>
              <div className="flex items-center gap-8">
              <p>Sort by</p>
              <select name="" className="!border border-black  rounded">
                <option value="" selected='selected'>Newest</option>
                <option value="">A-Z</option>
                <option value="">Z-A</option>
                <option value="">Price, low to high</option>
                <option value="">Price, high to low</option>
                <option value="">Date, old to new</option>
                <option value="">Date, new to old</option>
              </select>
              <FaList onClick={()=>{setGrid(1)}} className='cursor-pointer' size={20} />
                <BsGrid onClick={()=>{setGrid(3)}} className='cursor-pointer' size={20} />
              </div>
            </div>
            <Products grid={grid} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
