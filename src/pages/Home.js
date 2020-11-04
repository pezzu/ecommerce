import React from "react";

import Header from "../components/header/Header";
import ProductList from "../features/products/ProductList";

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 mb-8">
        <p className="text-center border-b-2 border-dotted border-grey mb-6 pb-4 leading-normal font-thin font-serif text-3xl">
          Lets see what we got here
        </p>
        <ProductList />
      </main>
    </>
  );
}

export default Home;
