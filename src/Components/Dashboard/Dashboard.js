/** @format */

import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
    };

    this.deleteProduct = this.deleteProduct.bind(this);
    this.getInventory = this.getInventory.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data,
      });
    });
  };

  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.getInventory())
      .catch(err => console.log('Dont worry bud try again later'));
  };

  render() {
    const { inventory } = this.state;
    return (
      <div className='dashboard'>
        {inventory.map((el, i) => {
          return (
            <Product
              products={el}
              key={i}
              deleteProduct={this.deleteProduct}
              selectedProduct={this.props.selectedProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
