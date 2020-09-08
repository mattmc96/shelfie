/** @format */

import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
  constructor(props) {
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.props.getInventory())
      .catch(err => console.log('testing ALL GOOD!'));
  };

  render() {
    const { inventory } = this.props;
    return (
      <div>
        {inventory.map(i => {
          return (
            <Product
              products={i}
              key={i.id}
              deleteProduct={this.deleteProduct}
              selectedProduct={() => this.selectedProduct(newProduct)}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
