import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ logo, Header, Footer, categories, faqData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [openId, setOpenId] = useState(null);

    const safeFaqData = faqData || [];
    
    // Extract unique categories from FAQ data
    const faqCategories = ['전체', ...new Set(safeFaqData.map(item => item.category))];

    const filteredFaq = safeFaqData.filter(item => {
        const matchesCategory = selectedCategory === '전체' || item.category === selectedCategory;
        const matchesSearch = item.question.includes(searchTerm) || item.answer.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="app-container">
            <Header categories={categories} logo={logo} />
            <div className="content">
                <div className="faq-section">
                    <div className="faq-section-header">
                        <h2>자주 묻는 질문 (FAQ)</h2>
                    </div>

                    <div className="faq-controls">
                        <select 
                            className="faq-category-select"
                            value={selectedCategory} 
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {faqCategories.map((cat, idx) => (
                                <option key={idx} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <div className="faq-search">
                            <input 
                                type="text" 
                                placeholder="검색어를 입력하세요" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn-search">검색</button>
                        </div>
                    </div>

                    <div className="faq-list-container">
                        {filteredFaq.length > 0 ? (
                            filteredFaq.map(item => (
                                <div key={item.id} className={`faq-item ${openId === item.id ? 'open' : ''}`}>
                                    <div className="faq-question" onClick={() => toggleFaq(item.id)}>
                                        <span className="faq-category">[{item.category}]</span>
                                        <span className="faq-q-text">{item.question}</span>
                                        <span className="faq-toggle-icon">{openId === item.id ? '▲' : '▼'}</span>
                                    </div>
                                    {openId === item.id && (
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="faq-empty">
                                검색 결과가 없습니다.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQ;
