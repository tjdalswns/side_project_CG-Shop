import './Hot.css';
import ProductItem from '../../Component/ProductItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hot = ({ Header, Footer, categories, data, logo }) => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const safeData = data || [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = safeData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(safeData.length / itemsPerPage);

    return (
        <div>
            <Header categories={categories} logo={logo} />
            <div className="hot-container">
                <div className="hot-content">
                    <h1 className="hot-title">Hot Collection</h1>
                    <div className="hot-list">
                        <div className="hot-list">
                            {currentItems.map(item => (
                                <ProductItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hot-pagination">
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
            <Footer />
        </div>
    )
}

export default Hot