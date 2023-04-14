import React from "react";
import BestsellerCard from "./BestsellerCard";

const Bestseller = ({ products }) => {
  // Sort the products array by rating in descending order
  const sortedProducts = products.sort((a, b) => b.rating - a.rating);

  // Get the top 4 rated products
  const topRatedProducts = sortedProducts.slice(0, 4);

  return (
    <div className="md:px-[104px] px-[20px] md:py-[200px] md:pb-[150px] py-[100px] box-border">
      <div className="w-full">
        <h2 className="md:text-[48px] text-[28px] font-[700] py-8">
          Best Seller
        </h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 box-border">
         {/* Render the BestSellerCard component for each top rated product */}
        {topRatedProducts.map((product) => (
          <BestsellerCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
