import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KeyboardItem.css';

const KeyboardItem = ({ item }) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate('/sub', { state: { item } });
    };

    return (
        <div className="keyboard-item" onClick={handleItemClick}>
            <div className="keyboard-img-wrapper">
                <img src={item.img} alt={item.name} className="keyboard-img" />
            </div>
            <div className="keyboard-info">
                <h3 className="keyboard-name">{item.name}</h3>
                <p className="keyboard-desc">{item.description}</p>
                <div className="keyboard-price">{item.price.toLocaleString()} KRW</div>
            </div>
        </div>
    );
};

export default KeyboardItem;
