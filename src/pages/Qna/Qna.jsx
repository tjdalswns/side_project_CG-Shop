import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Qna.css';

const Qna = ({ Header, Footer, categories, logo, qnaList }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const [expandedId, setExpandedId] = useState(null);
    const [passwordPromptId, setPasswordPromptId] = useState(null);
    const [passwordInput, setPasswordInput] = useState('');

    const safeQnaList = qnaList || [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentQna = safeQnaList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(safeQnaList.length / itemsPerPage);

    const handleItemClick = (qna) => {
        if (expandedId === qna.id) {
            setExpandedId(null);
            setPasswordPromptId(null);
            setPasswordInput('');
            return;
        }

        if (qna.isSecret) {
            if (passwordPromptId === qna.id) {
                setPasswordPromptId(null);
            } else {
                setExpandedId(null);
                setPasswordPromptId(qna.id);
            }
            setPasswordInput('');
        } else {
            setPasswordPromptId(null);
            setPasswordInput('');
            setExpandedId(qna.id);
        }
    };

    const handlePasswordSubmit = (qna) => {
        if (passwordInput === qna.password) {
            setExpandedId(qna.id);
            setPasswordPromptId(null);
            setPasswordInput('');
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <div className="app-container">
            <Header categories={categories} logo={logo} />
            <div className="content">
                <div className="qna-section">
                    <div className="qna-section-header">
                        <h2>Q&A 게시판</h2>
                        <p>상품, 배송, 교환/환불 등에 대한 질문을 남겨주세요.</p>
                    </div>

                    <div className="qna-list-container">
                        <div className="qna-list-header">
                            <span className="col-id">번호</span>
                            <span className="col-type">분류</span>
                            <span className="col-title">제목</span>
                            <span className="col-author">작성자</span>
                            <span className="col-date">등록일</span>
                        </div>
                        {currentQna.length > 0 ? (
                            currentQna.map((qna, index) => (
                                <div key={qna.id} className="qna-list-wrapper">
                                    <div className="qna-list-item" onClick={() => handleItemClick(qna)}>
                                        <span className="col-id">{safeQnaList.length - indexOfFirstItem - index}</span>
                                        <span className="col-type">[{qna.type}]</span>
                                        <span className="col-title">
                                            {qna.isSecret && expandedId !== qna.id ? '🔒 비밀글입니다.' : qna.title}
                                        </span>
                                        <span className="col-author">{qna.author}</span>
                                        <span className="col-date">{qna.date}</span>
                                    </div>
                                    
                                    {passwordPromptId === qna.id && (
                                        <div className="qna-password-prompt">
                                            <span>비밀번호를 입력해주세요:</span>
                                            <input 
                                                type="password" 
                                                value={passwordInput}
                                                placeholder="비밀번호"
                                                onChange={(e) => setPasswordInput(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handlePasswordSubmit(qna);
                                                }}
                                            />
                                            <button onClick={() => handlePasswordSubmit(qna)}>확인</button>
                                        </div>
                                    )}

                                    {expandedId === qna.id && (
                                        <div className="qna-detail-content">
                                            <div className="qna-detail-text">
                                                {qna.content || "등록된 내용이 없습니다."}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="qna-empty">작성된 문의글이 없습니다.</div>
                        )}
                    </div>

                    <div className="button-group qna-list-actions">
                        <button className="btn-write" onClick={() => navigate('/qna/write')}>문의하기</button>
                    </div>

                    <div className="qna-pagination">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={currentPage === page ? 'active' : ''}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Qna;