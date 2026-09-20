import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
  console.log("CART CLICKED");
  setShowProductList(false);
  setShowCart(true);
};

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };
  
  console.log({
  showProductList,
  showCart
});
  console.log({
  showProductList,
  showCart
});
  return (
    <div className="app-container">

      {!showProductList && !showCart && (
        <div className="landing-page">
          <div className="background-image"></div>

          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>

              <button
                className="get-started-button"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>

            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {showProductList && (
        <div className="product-list-container visible">
          <ProductList
            onHomeClick={handleHomeClick}
            onCartClick={handleCartClick}
          />
        </div>
      )}

      {showCart && (
        <CartItem
          onContinueShopping={handleContinueShopping}
        />
      )}

    </div>
  );
}

export default App;