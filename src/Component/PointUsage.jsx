import React, { useState } from 'react';
import './PointUsage.css';

const PointUsage = ({ userPoints, appliedPoints, onApplyPoints }) => {
    const [inputValue, setInputValue] = useState('');

    const handleApply = () => {
        const points = parseInt(inputValue, 10);
        if (isNaN(points) || points <= 0) {
            alert('올바른 포인트를 입력해주세요.');
            return;
        }
        if (points < 1000) {
            alert('포인트는 1000포인트 이상시 사용 가능합니다.');
            return;
        }
        if (points > userPoints) {
            alert('보유한 포인트보다 많이 사용할 수 없습니다.');
            return;
        }
        onApplyPoints(points);
        setInputValue('');
    };

    const handleCancel = () => {
        onApplyPoints(0);
    }

    const handleMax = () => {
        onApplyPoints(userPoints);
        setInputValue('');
    }

    return (
        <div className="point-usage-container section-box">
            <h2 className="section-title">포인트 사용</h2>
            <div className="point-info">
                <span>보유 포인트: <strong>{userPoints.toLocaleString()} P</strong></span>
            </div>
            <div className="point-input-group">
                <input
                    type="number"
                    placeholder="사용할 포인트 입력"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="point-input"
                />
                <button className="point-btn" onClick={handleApply}>적용</button>
                <button className="point-btn" onClick={handleMax}>전액 사용</button>
            </div>
            <p className="point-notice">* 1000포인트 이상시 사용 가능</p>
            {appliedPoints > 0 && (
                <div className="applied-point-info">
                    현재 {appliedPoints.toLocaleString()} 포인트 적용 중
                    <button className="point-cancel-btn" onClick={handleCancel}>취소</button>
                </div>
            )}
        </div>
    );
};

export default PointUsage;
