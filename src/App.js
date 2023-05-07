import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ContactUs from "./components/ContactUs";
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from "./components/ProductCard";

function App() {
  const productIds = [1, 2, 3, 4, 5];

  return (
    <BrowserRouter>
      <div className="container mx-auto px-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Home />
                {/* <h1 className="text-4xl font-semibold mb-6">Featured Products</h1>
                {productIds.map((productId) => (
                <ProductCard key={productId} productId={productId} /> */}
              {/* ))} */}
              </>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

            {/* <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
              {productIds.map((productId) => (
                <ProductCard key={productId} productId={productId} />
              ))}
            </Carousel> */}