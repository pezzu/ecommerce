import React from "react";

const Card = (props) => {
  return (
    <div className="sm:flex-1 bg-white shadow-lg p-3 rounded-lg">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="bg-cover bg-center bg-gray-300 h-48 rounded"
      ></div>
      <div className="mt-6">
        <p className="text-lg text-bold tracking-wide text-gray-900 mb-2">
          {props.title}
        </p>
        <p className="text-sm text-gray-700 font-hairline">
          {props.description}
        </p>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Order
        </button>
        <div>
          <p className="text-3xl text-gray-900">${props.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
