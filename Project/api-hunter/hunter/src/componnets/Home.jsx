import React from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-[50px]">
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
