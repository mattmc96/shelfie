/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render(props) {
    const { id, name, price, img } = this.props.products;
    return (
      <div className='product' key={this.props.i}>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <label for='delete'>
          <button onClick={() => this.props.deleteProduct(id)}>Delete</button>
        </label>
        <label for='edit'>
          <Link to={`/edit/${id}`}>
            <button className='edit-btn'>Edit</button>
          </Link>
        </label>
      </div>
    );
  }
}

export default Product;
