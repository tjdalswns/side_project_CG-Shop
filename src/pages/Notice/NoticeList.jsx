import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import { useState } from 'react';
import './NoticeList.css';

const NoticeList = ({ categories, logo, notices }) => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const safeNotices = notices || [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNotices = safeNotices.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(safeNotices.length / itemsPerPage);

    return (
        <div className="app-container">
            <Header categories={categories} logo={logo} />
            <div className="content">
                <div className="notice-section">
                    <div className="notice-section-header">
                        <h2>공지사항</h2>
                    </div>

                    <div className="notice-list-container">
                        <div className="notice-list-header">
                            <span className="col-id">번호</span>
                            <span className="col-title">제목</span>
                            <span className="col-date">등록일</span>
                        </div>
                        {currentNotices.map((notice, index) => (
                            <div key={notice.id} className="notice-list-item" onClick={() => navigate(`/notice/${notice.id}`)}>
                                <span className="col-id">{indexOfFirstItem + index + 1}</span>
                                <span className="col-title">{notice.title}</span>
                                <span className="col-date">{notice.date}</span>
                            </div>
                        ))}
                    </div>

                    <div className="button-group notice-actions">
                        <button className="notice-btn-write" onClick={() => navigate('/')}>돌아가기</button>
                        <button className="notice-btn-write" onClick={() => navigate('/notice/write')}>공지사항 작성하기</button>
                    </div>

                    <div className="notice-pagination">
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

export default NoticeList;