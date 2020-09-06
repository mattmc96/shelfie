import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    const { inventory } = this.props;
    return (
      <div>
        {inventory.map((element) => {
          return <Product products={element} />;
        })}
      </div>
    );
  }
}
export default Dashboard;
