import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//context
import { ContextProvider } from "./context/AuthProvider";

//pages
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Nuevas from "./pages/Nuevas";
import Category from "./pages/Category";

//Navbar
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <div className="container-fluid">
            <div className="wrap-nav">
              <Navbar />
            </div>
            <div className="wrap-main">
              <Topbar />
              <Routes>
                <Route index element={<Home />} />
                <Route path=":movieSlug" element={<MovieDetail />} />
                <Route path="nuevas" element={<Nuevas />} />
                <Route path="category" element={<Category />}>
                  <Route path=":categoryId" element={<Category />} />
                </Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
