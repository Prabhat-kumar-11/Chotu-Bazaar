import React from "react";
import { Route, Routes } from "react-router";
import { SingleProduct } from "../pages/SingleProduct";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductCart from "../pages/productCart";
import PrivateRoute from "./privateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <ProductCart />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
