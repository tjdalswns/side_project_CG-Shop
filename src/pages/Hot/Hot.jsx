import './Hot.css';
import ProductItem from '../../Component/ProductItem';

const Hot = ({ Header, Footer, categories, data, logo }) => {
    return (
        <div className="hot-container">
            <Header categories={categories} logo={logo} />
            <div className="hot-content">
                <h1 className="hot-title">Hot Collection</h1>
                <div className="hot-list">
                    {data && data.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hot