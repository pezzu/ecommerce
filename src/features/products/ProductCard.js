import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToShoppingCart } from "../shopping-cart/shoppingCart.slice";

const ProductCard = (props) => {
  const currency = useSelector((store) => store.currency);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between sm:flex-1 bg-white shadow-lg p-3 rounded-lg tracking-wide">
      <img
        src={props.image}
        alt={props.title}
        className="card__image h-48 rounded"
        loading="lazy"
      />
      <div className="mt-1">
        <p className="card__title text-lg font-bold tracking-wide text-gray-900">
          {props.title}
        </p>
        <p className="card__description text-sm text-gray-700 font-hairline mt-2">
          {props.description}
        </p>
      </div>
      <div className="mt-3 flex justify-between">
        <button
          className="rounded shadow-md flex items-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => dispatch(addToShoppingCart(props))}
        >
          Order
        </button>
        <div>
          <p className="text-2xl text-gray-900">
            <span className="currency">{currency.sign}</span>
            <span className="card__price">
              {(props.price * currency.rate).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
