import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Buy.css';
import ProductInfo from '../../Component/ProductInfo';
import OrderSummary from '../../Component/OrderSummary';
import PointUsage from '../../Component/PointUsage';
import PaymentMethod from '../../Component/PaymentMethod';
import Terms from '../../Component/Terms';

const Buy = ({ Header, Footer, logo }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Fallback item if accessed directly without state, for rendering purposes.
    const item = location.state?.item || {
        name: "테스트 상품 (선택안함)",
        price: 50000,
        img: "https://via.placeholder.com/150",
    };

    const userPoints = 3000; // Mock user points
    const shippingFee = 3000;
    const discount = 0; // Mock coupon discount

    const [appliedPoints, setAppliedPoints] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleApplyPoints = (points) => {
        setAppliedPoints(points);
    };

    const handleCheckoutClick = () => {
        if (!selectedPaymentMethod) {
            alert('결제 수단을 선택해주세요.');
            return;
        }
        alert('결제가 성공적으로 완료되었습니다.');
        navigate('/');
    };

    return (
        <div className="buy-container">
            <Header logo={logo} />
            <div className="buy-content">
                <h1 className="buy-page-title">주문결제</h1>
                <div className="checkout-grid">
                    <ProductInfo item={item} />
                    <OrderSummary
                        basePrice={item.price}
                        shippingFee={shippingFee}
                        discount={discount}
                        pointUsed={appliedPoints}
                    />
                    <PointUsage
                        userPoints={userPoints}
                        appliedPoints={appliedPoints}
                        onApplyPoints={handleApplyPoints}
                    />
                    <PaymentMethod
                        selectedMethod={selectedPaymentMethod}
                        onChangeMethod={setSelectedPaymentMethod}
                    />
                    <Terms onCheckoutClick={handleCheckoutClick} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Buy;