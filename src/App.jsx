import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import { MoviesProvider } from "./context/MoviesProvider";

//pages
import Home from "./pages/Home";
import ProductsDetail from "./pages/ProductDetail";
import Category from "./pages/Category";

//Navbar
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <MoviesProvider>
          <BrowserRouter>
            <div className="wrap-nav">
              <Navbar />
            </div>
            <div className="wrap-main">
              <Routes>
                <Route index element={<Home />} />
                <Route path="category" element={<Category />} />
              </Routes>
            </div>
          </BrowserRouter>
        </MoviesProvider>
      </div>
    </>
  );
}
