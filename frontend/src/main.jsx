import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllProducts from "./pages/AllProducts.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import MainLayout from "./MainLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Login />} />
            <Route path="/register" element = {<Register/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/allproducts" element={<AllProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
