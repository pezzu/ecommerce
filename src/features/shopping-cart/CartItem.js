import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToShoppingCart,
  removeFromShoppingCart,
  removeAllFromShoppingCart,
} from "./shoppingCart.slice";

const CartItem = (props) => {
  const currency = useSelector((store) => store.currency);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="product__image w-20">
          <img className="h-24" src={props.image} alt="Thumbnail" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="product__title font-bold text-gray-900 text-lg">
            {props.title}
          </span>
          <span className="product__description text-gray-700 text-sm">
            {props.description}
          </span>
          <div>
            <button
              onClick={() => dispatch(removeAllFromShoppingCart(props))}
              className="font-semibold flex-grow-0 hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button
          onClick={() => dispatch(removeFromShoppingCart(props))}
          className="product__remove"
        >
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <div className="mx-2 border text-center w-8">{props.amount}</div>
        <button onClick={() => dispatch(addToShoppingCart(props))}>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <span className="text-center w-1/5 text-2xl text-gray-900">
        <span className="currency">{currency.sign}</span>
        <span className="product__price">
          {(props.price * currency.rate).toFixed(2)}
        </span>
      </span>
      <span className="text-center w-1/5 text-2xl text-gray-900">
        {currency.sign}
        {(props.price * props.amount * currency.rate).toFixed(2)}
      </span>
    </div>
  );
};

export default CartItem;
