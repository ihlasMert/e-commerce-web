import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Products from "../pages/Products"
/* import ProductsDetails from "../pages/ProductsDetails" */
import Checkout from "../pages/Checkout"
import Cart from "../pages/Cart"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}></Route>
      <Route path="/home" element={<Home to="/home"/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
     {/*  <Route path="/ProductsDetails/:id" element={<ProductsDetails/>}></Route> */}
    </Routes>
  )
}

export default Routers
