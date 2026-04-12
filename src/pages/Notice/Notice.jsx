import React, { useState } from 'react';
import './Notice.css';
import { useNavigate } from 'react-router-dom';

const Notice = ({ notices }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const safeNotices = notices || [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNotices = safeNotices.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(safeNotices.length / itemsPerPage);

    return (
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

            <button className='btn-list' onClick={() => navigate('/notice/list')}>공지사항 목록</button>

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
    );
};

export default Notice;
