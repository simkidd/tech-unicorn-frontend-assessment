import React from "react";
import ProductCard, {ProductListCard} from "./ProductCard";

const Products = ({ viewType, filteredProducts, loading, error }) => {

  const Loading = () => {
    return (
      <>
        <h1 className="text-[64px] font-bold ">Loading...</h1>
      </>
    );
  };

  const ErrorMsg = () => {
    return (
      <>
        <h1 className="text-[64px] font-bold text-red-500">{error}</h1>
        <h1 className="text-[64px] font-bold text-red-500">{error}</h1>
        <h1 className="text-[64px] font-bold text-red-500">{error}</h1>
        <h1 className="text-[64px] font-bold text-red-500">{error}</h1>
        <h1 className="text-[64px] font-bold text-red-500">{error}</h1>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filteredProducts.map((product) => {
          return  <ProductCard key={product.id} product={product} />;
        })}
      </>
    );
  };

  return (
    <>
      <div className={`${viewType === 'grid' ? "grid md:grid-cols-3 grid-cols-2 justify-center gap-4" : "flex flex-col gap-4"}`}>
        {loading ? <Loading /> : error ? <ErrorMsg /> : <ShowProducts />}
      </div>
    </>
  );
};

export default Products;
