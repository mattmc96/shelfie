import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    //TODO figure out price for state

    this.state = { name: "", price: 0, imgurl: "" };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnClick = () => {
    this.setState({
      name: "",
      price: "",
      imgurl: "",
    });
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
            name="imgurl"
            value={this.state.imgurl}
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
