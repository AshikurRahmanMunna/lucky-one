import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const handleAddToCart = props.handleAddToCart;
  const { name, img, price } = props.product;
  return (
    <div className="col">
      <div className="card bg-light shadow">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <button onClick={() => handleAddToCart(props.product)} className="btn cart-btn btn-warning w-100"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add To cart </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
