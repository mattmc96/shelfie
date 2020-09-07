/** @format */

import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.onFormSubmit();
  }

  onFormSubmit() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  // formInventory = (products) => {
  //   this.setState({ newInventory: products });
  // };

  render() {
    const { inventory } = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={inventory} getInventory={this.onFormSubmit} />
        <Form
          getInventory={this.onFormSubmit}
          addProducts={inventory.newInventory}
        />
      </div>
    );
  }
}

export default App;
