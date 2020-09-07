/** @format */

import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    // pass props
    super(); // pass props

    //TODO figure out price for state

    this.state = {
      name: "",
      price: 0,
      img: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnClick = () => {
    this.setState({
      name: "",
      price: "",
      img: "",
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { name, price, img } = this.state;
    const { onSubmit } = this.props;
    const product = { name, price, img };

    axios.post("/api/product", product).then(res => {
      this.setState({
        inventory: res.data,
      });
      onSubmit.getInventory();
    });
    this.handleOnClick();
  };

  render() {
    return (
      <form>
        <div>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />

          <input
            name="price"
            value={this.state.price}
            onChange={this.handleOnChange}
          />

          <input
            name="img"
            value={this.state.img}
            onChange={this.handleOnChange}
          />

          <button value="cancel" onClick={this.handleOnClick}>
            Cancel
          </button>
          <button>Add to Inventory</button>
        </div>
      </form>
    );
  }
}
export default Form;
