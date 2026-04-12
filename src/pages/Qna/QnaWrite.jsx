import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QnaWrite.css';

const QnaWrite = ({ Header, Footer, categories, logo, addQna }) => {
    const navigate = useNavigate();
    const [type, setType] = useState('상품문의');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSecret, setIsSecret] = useState(false);
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }
        if (isSecret && !password.trim()) {
            alert('비밀글로 설정할 경우 비밀번호를 입력해주세요.');
            return;
        }
        addQna(type, title, content, isSecret, password);
        alert('문의가 접수되었습니다.');
        navigate('/qna');
    };

    return (
        <div className="app-container">
            <Header categories={categories} logo={logo} />
            <div className="content">
                <div className="qna-write-section">
                    <div className="qna-write-header">
                        <h2>문의하기</h2>
                    </div>
                    
                    <div className="qna-write-form">
                        <div className="form-group row-group">
                            <label>문의 유형</label>
                            <select value={type} onChange={(e) => setType(e.target.value)} className="qna-select">
                                <option value="상품문의">상품문의</option>
                                <option value="배송결제">배송/결제</option>
                                <option value="교환반품">교환/반품</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>

                        <div className="form-group row-group">
                            <label>공개 여부</label>
                            <div className="radio-group">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="secret" 
                                        checked={!isSecret} 
                                        onChange={() => {
                                            setIsSecret(false);
                                            setPassword('');
                                        }} 
                                    /> 공개글
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="secret" 
                                        checked={isSecret} 
                                        onChange={() => setIsSecret(true)} 
                                    /> 비밀글
                                </label>
                            </div>
                        </div>

                        {isSecret && (
                            <div className="form-group row-group">
                                <label>비밀번호</label>
                                <input 
                                    type="password" 
                                    value={password}
                                    placeholder="비밀번호를 입력하세요 (4자리 이상 권장)"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="qna-password-input"
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <label>제목</label>
                            <input
                                className="qna-input"
                                type="text"
                                placeholder="제목을 입력해주세요."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>내용</label>
                            <textarea
                                className="qna-textarea"
                                placeholder="문의 내용을 자세히 입력해주세요."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    
                    <div className="button-group qna-write-actions">
                        <button className="btn-cancel" onClick={() => navigate(-1)}>취소</button>
                        <button className="btn-submit" onClick={handleSubmit}>등록하기</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default QnaWrite;
