import React, { useState } from 'react';
import './NoticeWrite.css';
import { useNavigate } from 'react-router-dom';

const NoticeWrite = ({ Header, Footer, categories, logo, addNotice }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }
        addNotice(title, content);
        alert('공지사항이 등록되었습니다.');
        navigate('/');
    };

    return (
        <div className="main-container">
            <Header categories={categories} logo={logo} />
            <div className="content notice-write-content">
                <div className="notice-write-header">
                    <h2>공지사항 작성</h2>
                </div>
                <div className="notice-write-form">
                    <input
                        className="notice-write-input"
                        type="text"
                        placeholder="공지사항 제목을 입력해주세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="notice-write-textarea"
                        placeholder="공지사항 내용을 입력해주세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div className="button-group notice-write-actions">
                    <button className="btn-back" onClick={() => navigate(-1)}>취소</button>
                    <button className="btn-submit" onClick={handleSubmit}>작성 완료</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NoticeWrite;
