import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ item }) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate('/sub', { state: { item } });
    };

    return (
        <div className="product-item" onClick={handleItemClick}>
            <div className="product-img-wrapper">
                {item.img ? (
                    <img src={item.img} alt={item.name} className="product-img" />
                ) : (
                    <div className="product-img-placeholder">Image No Provided</div>
                )}
            </div>
            <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-desc">{item.description}</p>
                <div className="product-price">{item.price.toLocaleString()} KRW</div>
            </div>
        </div>
    );
};

export default ProductItem;
