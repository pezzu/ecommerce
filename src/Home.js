import React from "react";

import Header from "./Header";
import Products from "./features/products/products.view";

function Home() {
  return (
    <>
      <Header />
      <h1>This is the main page</h1>
      <Products />
    </>
  );
}

export default Home;
