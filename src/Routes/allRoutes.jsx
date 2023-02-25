import React from "react";
import { Route, Routes } from "react-router";
import { SingleProduct } from "../components/SingleProduct";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct/>} />
    </Routes>
  );
};

export default AllRoutes;
