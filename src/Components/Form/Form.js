/** @format */

import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      price: 0,
      img: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    // this.currentProduct = this.currentProduct.bind(this)
    // this.handleSave = this.handleSave.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.setState({
        id: this.props.id,
        name: this.props.name,
        price: this.props.price,
        img: this.props.img,
      });
    }
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnClick = () => {
    this.setState({
      name: '',
      price: '',
      img: '',
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { name, price, img } = this.state;
    const { onSubmit } = this.props;
    const product = { name, price, img };

    axios.post('/api/product', { product }).then(res => {
      this.setState({
        inventory: res.data,
      });
      onSubmit.getInventory();
      this.handleOnClick();
    });
  };

  updateProduct = id => {
    const { name, price, img } = this.state;
    const edit = { name, price, img };
    axios
      .put(`/api/inventory/${id}`, edit)
      .then(res => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form>
        <div>
          <input
            name='name'
            value={this.state.name}
            onChange={this.handleOnChange}
          />

          <input
            name='price'
            value={this.state.price}
            onChange={this.handleOnChange}
          />

          <input
            name='img'
            value={this.state.img}
            onChange={this.handleOnChange}
          />

          <button value='cancel' onClick={this.handleOnClick}>
            Cancel
          </button>
          {this.state.id ? (
            <button onClick={() => this.handleSubmit()}>Save Changes</button>
          ) : (
            <button onClick={() => this.handleSave()}>Add to Inventory</button>
          )}
        </div>
      </form>
    );
  }
}
export default Form;
