import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Meta from "../components/Meta";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

        setProduct(res.data);
        console.log(res.data);
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
            <h2 className="text-[40px] font-[700]">{product.title}</h2>
          </div>
          <div className="border bg-[var(--placeholder)] ">Image is here.</div>
        </div>
        {/* breadcrumb ends here */}
        <div>
          <div>
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
