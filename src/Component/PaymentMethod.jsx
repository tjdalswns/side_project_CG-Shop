import React from 'react';
import './PaymentMethod.css';

const PaymentMethod = ({ selectedMethod, onChangeMethod }) => {
    const methods = [
        { id: 'card', label: '신용/체크카드' },
        { id: 'bank', label: '무통장 입금' },
        { id: 'phone', label: '휴대폰 결제' },
        { id: 'kakao', label: '카카오페이' },
        { id: 'naver', label: '네이버페이' }
    ];

    return (
        <div className="payment-method-container section-box">
            <h2 className="section-title">결제 수단</h2>
            <div className="method-grid">
                {methods.map((method) => (
                    <label 
                        key={method.id} 
                        className={`method-label ${selectedMethod === method.id ? 'active' : ''}`}
                    >
                        <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={selectedMethod === method.id}
                            onChange={(e) => onChangeMethod(e.target.value)}
                            className="method-radio"
                        />
                        <span className="method-text">{method.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default PaymentMethod;
