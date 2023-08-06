import React, { useEffect, useState } from 'react'
import product from '../../components/dummyData/DummyData'
import './Ecommerce.css'
const Ecommerce = () => {


    return (
        <div className="app-container">
            <h1 className="app-header">Fashion eCommerce Store</h1>
            <div className="product-list">
                {product.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.images[0]} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-category">Category: {product.category}</p>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price.toFixed(2)}</p>
                            <p className="product-stock">Stock: {product.stock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ecommerce