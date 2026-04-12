import React, { useState } from 'react';
import './Terms.css';

const Terms = ({ onCheckoutClick }) => {
    const [agree, setAgree] = useState(false);

    const handleCheckout = () => {
        if (!agree) {
            alert('이용 및 정보 제공 약관에 동의해주세요.');
            return;
        }
        onCheckoutClick();
    };

    return (
        <div className="terms-container section-box">
            <h2 className="section-title">이용 및 정보 제공 약관</h2>
            <div className="terms-box">
                <p>1. 수집하는 개인정보 항목: 이름, 연락처, 주소, 이메일, 결제정보</p>
                <p>2. 수집 및 이용 목적: 물품 배송, 결제, 고객 상담 등</p>
                <p>3. 보유 및 이용 기간: 전자상거래법 등 관련 법령에 따른 보존 기간</p>
            </div>
            <label className="terms-agree-label">
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="agree-checkbox"
                />
                위 약관을 확인하였으며, 이에 동의합니다 (필수)
            </label>

            <button className="final-checkout-btn" onClick={handleCheckout} disabled={!agree}>
                결제하기
            </button>
        </div>
    );
};

export default Terms;
