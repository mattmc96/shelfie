/** @format */

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Product = props => {
  let { id, name, price, img } = props.products;
  const [firstImage, setFirstImage] = useState(
    'https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192jpg'
  );
  const [imageFunc, setImageFunc] = useState({
    image: img ? null : (img = firstImage)
  });

  return (
    <div className='product'>
      <div className='product-img'>
        <img src={imageFunc} />
        <div className='product-box'>
          <p className='title'>{name}</p>
          <p className='price'>${price}</p>
        </div>
        <div className='product-button-box'>
          <button onClick={() => props.deleteProduct(id)}>Delete</button>
          <button
            onClick={() => props.history.push(`/edit/${props.products.id}`)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product);
