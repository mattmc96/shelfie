/** @format */

import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  componentDidMount() {
    this.getInventory();
  }
  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      });
    });
  };

  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.getInventory())
      .catch(err => console.log('Dont worry bud try again later', err));
  };

  render() {
    return (
      <div className='dashboard'>
        {this.state.inventory.map(e => {
          return (
            <Product
              products={e}
              key={e.id}
              deleteProduct={this.deleteProduct}
              // selectedProduct={this.props.selectedProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
