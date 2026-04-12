import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Sub.css';

const Sub = ({ Header, Footer, logo }) => {
    const location = useLocation();
    const { item } = location.state || {};
    const navigate = useNavigate();
    const [isBuyLoading, setIsBuyLoading] = useState(false);
    const [isCartLoading, setIsCartLoading] = useState(false);

    const handleBuyClick = () => {
        setIsBuyLoading(true);
        setTimeout(() => {
            setIsBuyLoading(false);
            navigate('/buy', { state: { item } });
        }, 1500);
    };

    const handleCartClick = () => {
        setIsCartLoading(true);
        setTimeout(() => {
            setIsCartLoading(false);
            alert('장바구니에 추가되었습니다.');
        }, 1500);
    };

    if (!item) {
        return (
            <div className="sub-container">
                <Header logo={logo} />
                <div className="sub-content">
                    <h1>Product not found</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="sub-container">
            <Header logo={logo} />
            <div className="sub-content">
                <div className="product-detail">
                    <div className="product-img-section">
                        <img src={item.img} alt={item.name} className="product-detail-img" />
                    </div>
                    <div className="product-info-section">
                        <h1 className="product-detail-name">{item.name}</h1>
                        <p className="product-detail-desc">{item.description}</p>
                        <div className="product-detail-price">
                            <span className="price-label">Price:</span>
                            <span className="price-value">{item.price.toLocaleString()} KRW</span>
                        </div>
                        <button className="buy-button" onClick={handleBuyClick} disabled={isBuyLoading || isCartLoading}>
                            {isBuyLoading ? <div className="button-loader"></div> : '구매하기'}
                        </button>
                        <button className="cart-button" onClick={handleCartClick} disabled={isBuyLoading || isCartLoading}>
                            {isCartLoading ? <div className="button-loader"></div> : '장바구니'}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Sub;