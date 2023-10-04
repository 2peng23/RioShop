import React, { useContext, useState } from "react";
import { products } from "../../../product";
import CartProduct from "./CartProduct";
import { shopContext } from "../../../context/shopContext";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(shopContext);

  const totalAmount = getTotalAmount();
  const [moving, isMoving] = useState(false);
  const navigate = useNavigate();

  const mouseOver = () => {
    isMoving(true);
  };
  const mouseOut = () => {
    isMoving(false);
  };

  // Check if there are any items in the cart
  const hasItemsInCart = Object.values(cartItems).some(
    (quantity) => quantity > 0
  );

  return (
    <div className="w-[80%] mx-auto my-10">
      {hasItemsInCart ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => {
              if (cartItems[product.id] > 0) {
                return <CartProduct data={product} key={product.id} />;
              }
              return null; // If quantity is 0, return null to skip rendering
            })}
          </div>
          <div className="mt-10 flex justify-end items-center">
            <div className="flex flex-col">
              <p className="text-orange-500">
                ${totalAmount}{" "}
                <span
                  className="cursor-pointer border p-2 bg-orange-500 text-white rounded-lg"
                  onClick={() => navigate("/")}
                >
                  Checkout
                </span>
              </p>
              <Link
                to="/"
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
                className="hover:scale-105 duration-300"
              >
                <p className="flex items-center mt-5 text-orange-500 font-bold">
                  <AiOutlineShopping
                    className={`"mx-2" ${
                      moving ? "animate__animated animate__jello" : ""
                    }`}
                    size={30}
                  />{" "}
                  Shop More{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl text-orange-500 font-bold">
          No items added in your cart.
        </p>
      )}
    </div>
  );
}

export default Cart;
