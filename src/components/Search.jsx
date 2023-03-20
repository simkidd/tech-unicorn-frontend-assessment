import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({searchProducts, searchQuery}) => {

  return (
    <>
      <form onSubmit={(e)=> e.preventDefault()} className="w-full flex items-center relative ">
        <input
          type="text"
          className="w-full rounded-[4px] p-3 !outline-[var(--color-50)] !border-[#f862385b] border"
          placeholder="Search products"
          value={searchQuery}
          onChange={searchProducts}
          
        />
        <FiSearch
          size={20}
          className="absolute right-3 text-[var(--placeholder)] cursor-pointer"
        />
      </form>
    </>
  );
};

export default Search;
