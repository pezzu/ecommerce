import React from "react";

import Header from "./components/header/Header";
import Products from "./components/products/Products.view";

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
