import React, { useState, useEffect } from 'react';
import './ProductCardList.css';

// ProductCard Component
const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description.slice(0, 100)}{product.description.length > 100 && '...'}</p>
        </div>
    );
};

// ProductCardList Component
const ProductCardList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false)); // Handle error
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="product-card-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCardList;
