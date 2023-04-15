import React from "react";
import RelatedItemsCard from "./RelatedItemsCard";

const RelatedItems = ({ relatedProducts }) => {
  

  return (
    <div className="md:px-[104px] px-[20px] md:pb-[150px] pb-[100px] box-border">
      <div className="w-full">
        <h2 className="md:text-[48px] text-[28px] font-[700] py-8">
          Related Items
        </h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 box-border">
        {relatedProducts.map((product) => (
          <RelatedItemsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;
