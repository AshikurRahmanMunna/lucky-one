import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Random from '../Random/Random';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const [cart, setCart] = useState([]);
    const handleAddToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }

    const [randomItem, setRandomItem] = useState({});
    const handleChooseRandom = () => {
        const randomCar = (cart[Math.round(Math.random() * cart.length)]);
        if(!randomCar) {
            handleChooseRandom();
        }
        else if(randomItem === randomCar) {
            handleChooseRandom();
        }
        else {
            setRandomItem(randomCar)
        }
    }
    return (
        <div className='container row mx-auto'>
            <div className="col-md-8 gx-5 col-sm-12">
                <div className='row row-cols-1 row-cols-md-3 g-lg-4'>
                    {
                        products.map(product => <Product 
                            key={product.id} 
                            product={product}
                            handleAddToCart={handleAddToCart}  
                            ></Product>)
                    }
                </div>
            </div>
            <div className="col-md-4 col-sm-12 shadow cart">
                <h2 className='my-4'>Select Cars</h2>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                    ></Cart>)
                }
                {
                    <Random key={randomItem.id} item={randomItem}></Random>
                }

                <div className="text-start mt-5">
                    <button onClick={handleChooseRandom} className='btn btn-outline-success mb-2'>Select One For Me</button>
                    <br />
                    <button className='btn btn-outline-danger'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Products;