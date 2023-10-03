import React from "react";
import { products } from "../../../product";
import Product from "./Product";
function Shop() {
  return (
    <div className="w-[80%] mx-auto my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
