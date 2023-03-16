import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Shop = () => {
  return (
    <div>
      <div className="grid grid-cols-[30%_70%] w-full">
       <div>
        <Breadcrumb title='Shop' />
        <h2>Shop</h2>
       </div> 
       <div>Image is here..</div> 
      </div>
    </div>
  );
};

export default Shop;
