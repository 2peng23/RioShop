import React, { useState } from "react";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [cartMoving, isCartMoving] = useState(false);
  const [shopMoving, isShopMoving] = useState(false);
  return (
    <div className=" bg-gray-800">
      <div className="flex justify-between items-center p-4 text-white">
        <Link className="text-2xl" to="/">
          Rio<span className="text-orange-700 font-extrabold">Shop</span>
        </Link>
        <div className="flex items-center">
          <Link to="/" className="mr-5">
            <AiOutlineShopping
              className={`"font-bold text-3xl m-2" ${
                shopMoving
                  ? "animate__animated animate__swing text-orange-600"
                  : ""
              }`}
              onMouseOver={() => {
                isShopMoving(true);
              }}
              onMouseOut={() => {
                isShopMoving(false);
              }}
            />
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart
              className={`"font-bold text-3xl m-2" ${
                cartMoving
                  ? "animate__animated animate__swing text-orange-600"
                  : ""
              }`}
              onMouseOver={() => {
                isCartMoving(true);
              }}
              onMouseOut={() => {
                isCartMoving(false);
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
