import React from 'react'

const RelatedItemsCard = ({product}) => {
  return (
    <>
      <div className="flex flex-col items-center overflow-hidden w-full h-[449px]">
        {/* image container */}
        <div className="w-full h-[296px] flex items-center justify-center relative group box-border overflow-hidden mb-[20px]">
          <img
            src={product.image}
            className="object-contain w-full h-[180px] group-hover:scale-[0.9] group-hover:opacity-[0.9] duration-300"
            alt=""
          />
          <span className="absolute top-4 right-4 bg-white rounded-[50%] w-[40px] h-[40px] flex items-center justify-center">
            <AiOutlineHeart
              size={24}
              className="text-[var(--color-50)] items-center"
            />
          </span>
          <span className="absolute top-[4.5rem] right-[-3rem] group-hover:right-4 duration-300 md:flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-white hidden overflow-hidden">
            <Link className="w-full h-full flex items-center justify-center">
              <MdAddShoppingCart size={24} className="text-[var(--color-50)]" />
            </Link>
          </span>
        </div>
        {/* image container end */}
        {/* product details */}
        <div className="flex flex-col items-center w-full">
          <p className="text-[14px] font-dmsans font-[500] text-[var(--color-50)] pb-[8px] leading-[18.2px] tracking-[0.8%]">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`} className="mb-[17px]">
            <h5 className="text-[18px] font-[700] tracking-[0.5%] leading-[28.8px] font-merriweather text-[#11142d]">
              {product.title.substring(0, 20) + "..."}
            </h5>
          </Link>
          <span>
            <Rating value={product.rating.rate} readOnly size="small" />
          </span>
          <p className="text-[24px] font-merriweather font-[700] text-[var(--color-50)] md:pt-[18px] pt-[5px] pb-[10px] tracking-[0.5%] leading-[28.8px]">
            ${product.price}
          </p>
          <Link className="bg-[var(--color-50)] md:hidden py-1 px-3 flex items-center justify-center rounded-[5px] text-white pb-1 w-full h-[40px] font-dmsans">
            Add to cart
            <MdAddShoppingCart size={20} className="ml-2" />
          </Link>
        </div>
        {/* details end */}
      </div>
    </>
  )
}

export default RelatedItemsCard