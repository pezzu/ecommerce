import React from "react";

import Header from "./components/header/Header";
import Products from "./components/products/Products.view";

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 mb-8">
        <div className="bg-blue-lightest px-4 py-8 text-grey-darker font-thin leading-normal font-thin font-serif text-lg">
          <h1 className="text-center border-b-2 border-dotted font-thin border-grey mb-6 pb-4">
            Responsive Equal Height Flexbox Grid with Column Spacing
          </h1>
          <Products />
        </div>
      </main>
    </>
  );
}

export default Home;
