import React from "react";
import { shopContext } from "../../../context/shopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import {
  IoBagCheckOutline,
  IoPricetag,
  IoPricetagSharp,
} from "react-icons/io5";

function CartProduct({ data }) {
  const {
    removeToCart,
    cartItems,
    addToCart,
    updateCartItem,
    getTotalAmount,
    getItemAmount,
  } = useContext(shopContext);
  const cartAmount = cartItems[data.id];
  const itemAmount = getItemAmount(data.id);

  return (
    <div className="border-2 p-5 rounded-lg hover:scale-105 duration-300 relative">
      <p className=" text-xl font-bold">{data.name}</p>
      <img
        src={data.image}
        alt=""
        className="h-[150px] w-[150px] bg-transparent  "
      />
      <p className="text-gray-500 border-2 rounded-full absolute top-2 right-2 p-4">
        ${data.price}
      </p>
      <div className="flex items-center mt-5">
        <button
          onClick={() => {
            removeToCart(data.id);
          }}
          className="rounded-lg bg-red-500 text-white px-3 py-0  hover:bg-red-600"
        >
          -
        </button>
        <input
          className="text-xl border border-gray-300 rounded-2xl mx-2  text-center w-[50px]"
          value={cartAmount}
          onChange={(e) => {
            updateCartItem(Number(e.target.value), data.id);
          }}
        />
        <button
          onClick={() => {
            addToCart(data.id);
          }}
          className="rounded-lg bg-green-500 text-white px-3 py-0  hover:bg-green-600"
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-center mt-8">
        <IoPricetagSharp size={25} className="text-orange-500" />
        <p className="text-lg font-bold text-orange-400">${itemAmount}</p>
      </div>
    </div>
  );
}

export default CartProduct;
