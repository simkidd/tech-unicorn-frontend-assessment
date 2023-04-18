import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const { id, image, title, price, quantity } = item;

  return (
    <div className="w-full h-[150px] overflow-hidden">
      <div className="flex w-full">
        <div>
          <div className="h-[150px] w-[150px] box-border ">
            <img src={image} alt="" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col">
            <div>{title}</div>
            <div>${price}</div>
            <div>${parseFloat(price * quantity).toFixed(2)}</div>

            <div className="flex gap-4">
              <button onClick={() => decreaseQuantity(id)} disabled={quantity < 2}>
                <BiMinus />
              </button>
              <p>{quantity}</p>
              <button onClick={() => increaseQuantity(id)}>
                <BsPlus />
              </button>
              <button onClick={() => removeFromCart(id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
