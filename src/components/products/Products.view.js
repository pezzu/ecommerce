import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return axios.get("/api/products").then(({ data }) => data);
  };

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
      <div className="sm:flex flex-wrap -mx-4 p-3">
        {products.map((product) => (
          <div key={product.id} className="sm:flex sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
            <Card {...product} />
          </div>
        ))}
      </div>
  );
};

export default Products;
