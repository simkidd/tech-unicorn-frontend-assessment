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

  const ShowGridProducts = () => {
    return (
      <>
        {filteredProducts.map((product) => {
          return  <ProductCard key={product.id} product={product} />;
        })}
      </>
    );
  };
  const GridComponent = () => {
    return (
      <>
        {loading ? <Loading /> : error ? <ErrorMsg /> : <ShowGridProducts /> }
      </>
    );
  };
  const ShowListProducts = () => {
    return (
      <>
        {filteredProducts.map((product) => {
          return  <ProductListCard key={product.id} product={product} />;
        })}
      </>
    );
  };
  const ListComponent = () => {
    return (
      <>
        {loading ? <Loading /> : error ? <ErrorMsg /> : <ShowListProducts /> }
      </>
    );
  };

  return (
    <>
      <div className={`${viewType === 'grid' ? "grid md:grid-cols-3 grid-cols-2 justify-center gap-4" : "flex flex-col gap-4"}`}>
        {viewType === 'grid' ? <GridComponent /> : <ListComponent/>}
      </div>
    </>
  );
};

export default Products;
