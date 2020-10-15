import React, { useState, useEffect } from "react";

import axios from "axios";

const Card = (props) => {
  return (
    <div className="px-4 p-2 hover:bg-blue-100">
      <div className="text-sm">{props.title}</div>
      <div className="text-sm">{props.image}</div>
      <div className="text-sm">{props.price}</div>
      <div className="text-sm">{props.description}</div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return axios.get("/api/products").then(({ data }) => data);
  };

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="py-4 divide-y divide-gray-400">
        {products.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
