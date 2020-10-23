import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { productsLoadingStart } from "./products.slice";

import LoadingSpinner from "../../components/loading-spinner/Spinner";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = useSelector((store) => store.products);
  const sorting = useSelector((store) => store.sorting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsLoadingStart());
  }, [dispatch]);

  const sortBy = (left, right) => {
    if (sorting.sortBy === "name") {
      return (
        left.title.localeCompare(right.title) * (sorting.ascending ? 1 : -1)
      );
    } else if (sorting.sortBy === "price") {
      return (left.price - right.price) * (sorting.ascending ? 1 : -1);
    }
  };

  if (products.loading) return <LoadingSpinner />;

  return (
    <div className="sm:flex flex-wrap -mx-4 p-3">
      {products.items.sort(sortBy).map((product) => (
        <div
          key={product.id}
          className="sm:flex sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2"
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
