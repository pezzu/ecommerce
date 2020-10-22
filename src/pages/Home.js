import React from "react";

import Header from "../components/header/Header";
import Products from "../features/products/Products";

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 mb-8">
        <p className="text-center border-b-2 border-dotted font-thin border-grey mb-6 pb-4 leading-normal font-thin font-serif text-lg">
          Lets see what we got here
        </p>
        <Products />
      </main>
    </>
  );
}

export default Home;
