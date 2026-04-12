import React from 'react';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ categories, logo }) => {
    const navigate = useNavigate();
    return (
        <div className="cart-container">
            <Header categories={categories} logo={logo} />
            <h2>장바구니</h2>
            <Footer />
        </div>
    );
};

export default Cart;