import React from 'react';
import './NoticeDetail.css';
import { useParams, useNavigate } from 'react-router-dom';

const NoticeDetail = ({ Header, Footer, categories, logo, notices }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the notice by id
    const notice = notices.find(n => n.id === parseInt(id));

    if (!notice) {
        return (
            <div className="main-container">
                <Header categories={categories} logo={logo} />
                <div className="content notice-detail-content">
                    <h2>존재하지 않는 공지사항입니다.</h2>
                    <button className="btn-back" onClick={() => navigate('/')}>목록으로 돌아가기</button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="main-container">
            <Header categories={categories} logo={logo} />
            <div className="content notice-detail-content">
                <div className="notice-detail-header">
                    <h2>{notice.title}</h2>
                    <p className="notice-detail-date">작성일: {notice.date}</p>
                </div>
                <div className="notice-detail-body">
                    {notice.content.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
                <div className="button-group notice-detail-actions">
                    <button className="btn-back" onClick={() => navigate('/')}>목록으로 돌아가기</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NoticeDetail;
