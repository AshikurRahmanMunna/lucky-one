import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {img, name, price} = props.item;
    return (
        <div className='cart-item'>
            <div className="row mx-auto my-auto">
                <div className="col-3 my-auto">
                    <img className='img-fluid' src={img} alt={name} />
                </div>
                <div className="col-8 my-auto text-start">
                    <h5 className='m-0'>{name}</h5>
                    <p className='m-0'><small>{price}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Cart;