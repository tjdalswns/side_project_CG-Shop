import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ basePrice, shippingFee, discount, pointUsed }) => {
    const totalPrice = basePrice + shippingFee - discount - pointUsed;
    const earnedPoints = Math.floor(Math.max(0, totalPrice) * 0.05); // 5% 적립

    return (
        <div className="order-summary-container section-box">
            <h2 className="section-title">주문 요약</h2>
            <div className="summary-list">
                <div className="summary-item">
                    <span>주문금액</span>
                    <span>{basePrice.toLocaleString()}원</span>
                </div>
                <div className="summary-item">
                    <span>배송비</span>
                    <span>{shippingFee === 0 ? '무료' : `+${shippingFee.toLocaleString()}원`}</span>
                </div>
                {discount > 0 && (
                    <div className="summary-item blue-text">
                        <span>쿠폰할인</span>
                        <span>-{discount.toLocaleString()}원</span>
                    </div>
                )}
                {pointUsed > 0 && (
                    <div className="summary-item blue-text">
                        <span>포인트 사용</span>
                        <span>-{pointUsed.toLocaleString()}원</span>
                    </div>
                )}
            </div>
            <div className="summary-total">
                <div className="total-row">
                    <span>총 결제금액</span>
                    <span className="total-price-text">{Math.max(0, totalPrice).toLocaleString()}원</span>
                </div>
                <div className="earned-points-row">
                    <span className="earned-points-text">{earnedPoints.toLocaleString()}포인트 적립 예정</span>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
