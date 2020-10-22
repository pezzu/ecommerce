import React from "react";

import Header from "../components/header/Header";
import LogList from "../features/logs/LogsList";

const Logs = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 mb-8">
        <p className="text-center border-b-2 border-dotted font-thin border-grey mb-6 pb-4 leading-normal font-thin font-serif text-lg">
          Audit Trail
        </p>
        <LogList />
      </main>
    </>
  );
};

export default Logs;
