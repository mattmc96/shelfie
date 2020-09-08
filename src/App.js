/** @format */

import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentProduct: {},
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.onFormSubmit();
  }

  onFormSubmit() {
    axios
      .get('/api/inventory')
      .then(res => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  selectedProduct(id) {
    axios
      .put(`/api/inventory/${id}`)
      .then(res => {
        this.setState({
          currentProduct: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { inventory, currentProduct } = this.state;
    return (
      <div className='App'>
        <Header />
        <Dashboard
          inventory={inventory}
          getInventory={this.onFormSubmit}
          selectedProduct={() => this.selectedProduct()}
        />
        <Form
          getInventory={this.onFormSubmit}
          currentProduct={currentProduct}
        />
      </div>
    );
  }
}

export default App;
