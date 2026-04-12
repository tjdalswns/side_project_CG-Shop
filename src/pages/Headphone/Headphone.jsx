import './Headphone.css';
import ProductItem from '../../Component/ProductItem';

const Headphone = ({ Header, Footer, categories, data, logo }) => {
    return (
        <div className="headphone-container">
            <Header categories={categories} logo={logo} />
            <div className="headphone-content">
                <h1 className="headphone-title">Headphone Collection</h1>
                <div className="headphone-list">
                    {data && data.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Headphone;
