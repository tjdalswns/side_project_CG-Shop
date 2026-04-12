import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ item }) => {
    if (!item) return <div className="product-info-empty section-box">선택된 상품이 없습니다.</div>;
    
    return (
        <div className="product-info-container section-box">
            <h2 className="section-title">제품 정보</h2>
            <div className="product-info-content">
                <img src={item.img} alt={item.name} className="product-img-small" />
                <div className="product-details">
                    <span className="product-name">{item.name}</span>
                    <span className="product-price">{item.price.toLocaleString()}원</span>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
