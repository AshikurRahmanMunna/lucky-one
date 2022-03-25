import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container row mx-auto'>
            <div className="col-md-8 gx-5 col-sm-12">
                <div className='row row-cols-1 row-cols-md-3 g-lg-4'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
            <div className="col-md-4 col-sm-12 shadow cart">
                <h2 className='my-4'>Select Cars</h2>

                <div className="text-left">
                    <button className='btn btn-outline-success mb-2'>Select One For Me</button>
                    <br />
                    <button className='btn btn-outline-danger'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Products;