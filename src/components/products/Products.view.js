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
      <div className="md:flex content-center flex-wrap -mx-2 p-3 bg-grey rounded shadow-lg">
        {products.map((product) => (
          <div key={product.id} className="md:flex md:w-1/2 lg:w-1/4 px-2 py-2">
            <Card {...product} />
          </div>
        ))}
      </div>
  );
};

export default Products;
