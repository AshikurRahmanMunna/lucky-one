import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
  const { name, img, price } = props.product;
  return (
    <div class="col">
      <div class="card">
        <img src={img} class="card-img-top" alt={name} />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{price}</p>
          <button className="btn cart-btn btn-warning w-100"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add To cart </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
