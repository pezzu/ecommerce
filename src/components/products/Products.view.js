import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const sorting = useSelector((store) => store.sorting);

  const getProducts = () => {
    return axios.get("/api/products").then(({ data }) => data);
  };

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  const sortBy = (left, right) => {
    if (sorting.sortBy === "name") {
      return left.title.localeCompare(right.title) * (sorting.ascending ? 1 : -1);
    } else if (sorting.sortBy === "price") {
      return (left.price - right.price) * (sorting.ascending ? 1 : -1);
    }
  };

  return (
    <div className="sm:flex flex-wrap -mx-4 p-3">
      {products.sort(sortBy).map((product) => (
        <div
          key={product.id}
          className="sm:flex sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2"
        >
          <Card {...product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
