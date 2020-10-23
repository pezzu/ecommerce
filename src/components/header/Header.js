import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeCurrency } from "../../features/currency/currency.slice";
import { sortByName, sortByPrice } from "../../features/sorting/sorting.slice";

const Header = () => {
  const currency = useSelector((store) => store.currency);
  const cart = useSelector((store) => store.shoppingCart);
  // const sorting = useSelector((store) => store.sorting);
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-3">
      <div className="mr-6">
        <Link id="brand-name" to="/" className="text-blue-200 hover:text-white">
          <span className="font-bold text-xl tracking-tight ">E</span>
          <span className="text-xl tracking-tight "> Commerce</span>
        </Link>
      </div>
      <div className="mr-6 flex items-center">
        <div className="flex mx-4">
          <button
            id="sort-price"
            className="px-2 py-1 border rounded text-blue-200 border-gray-800 hover:text-white hover:border-white"
            onClick={() => dispatch(sortByPrice())}
          >
            Price
          </button>
          <button
            id="sort-name"
            className="px-2 py-1 border rounded text-blue-200 border-gray-800 hover:text-white hover:border-white"
            onClick={() => dispatch(sortByName())}
          >
            Name
          </button>
        </div>
        <div className="flex mx-4">
          <button
            className="px-2 py-1 border rounded text-blue-200 border-gray-800 hover:text-white hover:border-white"
            onClick={() => dispatch(changeCurrency("USD"))}
          >
            USD
          </button>
          <button
            className="px-2 py-1 border rounded text-blue-200 border-gray-800 hover:text-white hover:border-white"
            onClick={() => dispatch(changeCurrency("EUR"))}
          >
            EUR
          </button>
          <button
            className="px-2 py-1 border rounded text-blue-200 border-gray-800 hover:text-white hover:border-white"
            onClick={() => dispatch(changeCurrency("GBP"))}
          >
            GBP
          </button>
        </div>
        <div className="flex mx-4">
          <Link to="/cart">
            <div className="flex items-center px-2 py-1 border rounded text-blue-200 border-gray-800 hover:text-white hover:border-white">
              <svg
                className="stroke-current h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="2"></circle>
                <circle cx="20" cy="21" r="2"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <div id="order-count" className="px-1">
                {cart.totalAmount}
              </div>
            </div>
          </Link>
        </div>
        <div className="font-semibold text-xl text-white mx-4">
          {currency.sign} {(cart.totalCost * currency.rate).toFixed(2)}
        </div>
      </div>
    </nav>
  );
};

export default Header;
