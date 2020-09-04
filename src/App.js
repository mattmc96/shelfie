import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        { name: "starburst", price: 14, img: "img.jpg" },
        { name: "snickers", price: 23, img: "img.jpg" },
        { name: "reeses", price: 15, img: "img.jpg" },
        { name: "skittles", price: 23, img: "img.jpg" },
        { name: "gummy worms", price: 51, img: "img.jpg" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}

export default App;
