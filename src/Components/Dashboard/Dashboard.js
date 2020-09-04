import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Product />
        <p>Dashboard</p>
      </div>
    );
  }
}

export default Dashboard;
