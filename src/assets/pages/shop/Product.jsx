import React from "react";
import { shopContext } from "../../../context/shopContext";
import { useContext } from "react";
function Product({ data }) {
  const { addToCart, cartItems } = useContext(shopContext);
  const cartAmount = cartItems[data.id];
  return (
    <div className="border-2 p-5 rounded-lg hover:scale-105 duration-300 relative">
      <p className=" text-xl font-bold">{data.name}</p>
      <img
        src={data.image}
        alt=""
        className="h-[150px] w-[150px] bg-transparent  "
      />
      <p className="text-orange-500 border-2 rounded-full absolute top-2 right-2 p-4">
        ${data.price}
      </p>
      <button
        onClick={() => {
          addToCart(data.id);
        }}
        className="rounded-lg bg-orange-400 text-white p-2 my-4 hover:bg-orange-600"
      >
        Add to Cart {cartAmount > 0 && <>({cartAmount}) </>}
      </button>
    </div>
  );
}

export default Product;
