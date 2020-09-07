/** @format */

import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.props.getInventory())
      .catch(err => alert('testing ALL GOOD!'));
  };

  render() {
    const { inventory } = this.props;
    return (
      <div>
        {inventory.map(element => {
          return (
            <Product products={element} deleteProduct={this.deleteProduct} />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
