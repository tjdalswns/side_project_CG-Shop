import './Mouse.css';
import ProductItem from '../../Component/ProductItem';

const Mouse = ({ Header, Footer, categories, data, logo }) => {
    return (
        <div className="mouse-container">
            <Header categories={categories} logo={logo} />
            <div className="mouse-content">
                <h1 className="mouse-title">Mouse Collection</h1>
                <div className="mouse-list">
                    {data && data.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Mouse;