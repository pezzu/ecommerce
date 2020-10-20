import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToShoppingCart } from "../shopping-cart/shoppingCart.slice";

const Card = (props) => {
  const currency = useSelector((store) => store.currency);
  const cart = useSelector((store) => store.shoppingCart);
  const dispatch = useDispatch();

  const orderedAmmount = cart.items.getIn([props.id, "amount"], 0);

  return (
    <div className="card sm:flex-1 bg-white shadow-lg p-3 rounded-lg">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="card__image bg-cover bg-center bg-gray-300 h-48 rounded"
      ></div>
      <div className="mt-6">
        <p className="card__title text-lg font-bold tracking-wide text-gray-900 mb-2">
          {props.title}
        </p>
        <p className="card__description text-sm text-gray-700 font-hairline">
          {props.description}
        </p>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          className="rounded shadow-md flex items-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => dispatch(addToShoppingCart(props))}
        >
          Order
        </button>
        {orderedAmmount > 0 && <div className="card__product-amount">{orderedAmmount}</div>}
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

export default Card;
