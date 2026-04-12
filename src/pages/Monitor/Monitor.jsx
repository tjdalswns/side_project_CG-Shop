import './Monitor.css';
import ProductItem from '../../Component/ProductItem';

const Monitor = ({ Header, Footer, categories, data, logo }) => {
    return (
        <div className="monitor-container">
            <Header categories={categories} logo={logo} />
            <div className="monitor-content">
                <h1 className="monitor-title">Monitor Collection</h1>
                <div className="monitor-list">
                    {data && data.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Monitor;
