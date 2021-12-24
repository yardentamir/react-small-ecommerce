import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Pages/productsList";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import ProductPayment from "./Pages/ProductPayment";

export default class ReactRouterExercise extends React.Component {
  state = { counter: 0, arrUserCart: [] };

  countProducts = (counter, productObj, index) => {
    this.setState({ counter });
    productObj.id = index;
    if (this.state.arrUserCart.includes(productObj)) {
      productObj.count++;
    } else {
      productObj.count = 1;
      this.state.arrUserCart.push(productObj);
    }
    console.log(this.state.arrUserCart);
  };

  render = () => {
    return (
      <div className="container ui">
        <BrowserRouter>
          <Header counter={this.state.counter} />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/products"
              exact
              element={
                <ProductList
                  callBack={this.countProducts}
                  counter={this.state.counter}
                />
              }
            />
            <Route
              path="/payment"
              exact
              element={<ProductPayment cartData={this.state.arrUserCart} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
}
