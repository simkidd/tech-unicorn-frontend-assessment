import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import { BiFilterAlt } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import Products from "../components/Products";
import Meta from "../components/Meta";
import Search from "../components/Search";
import { MdArrowForwardIos } from "react-icons/md";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [viewType, setViewType] = useState("grid")

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Error fetching data!");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    const filteredByCategory = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredByCategory);
  };

  

  const handleSort = (sortType) => {
    setSortType(sortType);
    let sortedProducts = [];
    switch (sortType) {
      case "alpha-asc":
        sortedProducts = [...products].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "alpha-desc":
        sortedProducts = [...products].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      case "price-low-to-high":
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
        break;
      case "rating-high-to-low":
        sortedProducts = [...products].sort(
          (a, b) => b.rating.rate - a.rating.rate
        );
        break;
      default:
        sortedProducts = products;
    }
    setFilteredProducts(sortedProducts);
  };



  const searchProducts = (searchQuery) => {
    const findProducts = products.filter((product) => product.title.toString().toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toString().toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchQuery({ findProducts, searchQuery });

    setFilteredProducts(findProducts)
  }

  

  return (
    <div>
      <Meta title={"Our Shop"} />
      <div>
        {/* title and breadcrumb */}
        <div className="grid md:grid-cols-[25%_75%] w-full">
          <div className="flex flex-col pl-[4rem] md:py-[8rem] py-[2rem] gap-3">
            <Breadcrumb title="Shop" />
            <h2 className="text-[48px] font-[700] ">Shop</h2>
          </div>
          <div className="border ">Image is here.</div>
        </div>

        <div className="grid md:grid-cols-[25%_75%] w-full py-[8rem] md:px-[4rem] px-[1rem]">
          {/* sidebar */}
          <div className="pr-8 hidden md:block">
            <div>
              <div className="pb-8 flex item-center justify-between">
                <h3 className="font-bold">Price</h3> <BiFilterAlt />
              </div>
            </div>
            <div className="pb-8">color</div>
            <div className="pb-8">
              <h3 className="font-bold pb-1">Category</h3>
              <p
                className="cursor-pointer flex items-center justify-between py-1"
                onClick={()=>setFilteredProducts(products)}
              >
                All Categories
                <MdArrowForwardIos />
              </p>
              <p
                className="cursor-pointer flex items-center justify-between py-1"
                onClick={() => handleFilter("men's clothing")}
              >
                Men's Clothing
                <MdArrowForwardIos />
              </p>
              <p
                className="cursor-pointer flex items-center justify-between py-1"
                onClick={() => handleFilter("women's clothing")}
              >
                Women
                <MdArrowForwardIos />
              </p>
              <p
                className="cursor-pointer flex items-center justify-between py-1"
                onClick={() => handleFilter("electronics")}
              >
                Electronics
                <MdArrowForwardIos />
              </p>
              <p
                className="cursor-pointer flex items-center justify-between py-1"
                onClick={() => handleFilter("jewelery")}
              >
                Jewelery
                <MdArrowForwardIos />
              </p>
            </div>
            <div>march discount</div>
          </div>

          {/* products list */}
          <div className="w-full flex flex-col">
            <Search searchProducts={searchProducts} searchQuery={searchQuery} />
            <div className="flex justify-between items-center py-8 pb-[4rem]">
            {/* filter by category */}
            <div className='flex items-center gap-1'>
            <BiFilterAlt size={20} className='md:hidden' />
            <select className='md:hidden !border border-[var(--placeholder)]  rounded' onChange={(e)=>handleFilter(e.target.value)}>
              <option value="">All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
            </select>
            </div>
            {/* filter by category ends here */}
              <p className='hidden md:flex items-start'>Showing results</p>
              <div className="flex items-center gap-8">
                <p className="hidden md:block">Sort by</p>
                <select
                  className="!border border-[var(--placeholder)]  rounded"
                  onChange={(e) => handleSort(e.target.value)}
                  value={sortType}
                >
                  {/* <option value="" defaultValue>
                    Newest
                  </option> */}
                  <option value="alpha-asc">A-Z</option>
                  <option value="alpha-desc">Z-A</option>
                  <option value="price-low-to-high">Price, low to high</option>
                  <option value="price-high-to-low">Price, high to low</option>
                  <option value="rating-high-to-low" >
                    Best selling
                  </option>
                </select>
                <FaList
                  onClick={()=>setViewType("list")}
                  className="cursor-pointer"
                  size={20}
                />
                <BsGrid
                  onClick={()=>setViewType('grid')}
                  className="cursor-pointer"
                  size={20}
                />
              </div>
            </div>
            <Products
              viewType={viewType}
              filteredProducts={filteredProducts}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
