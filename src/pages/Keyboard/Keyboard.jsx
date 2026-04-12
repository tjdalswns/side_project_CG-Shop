import './Keyboard.css';
import ProductItem from '../../Component/ProductItem';

const Keyboard = ({ Header, Footer, categories, data, logo }) => {
    return (
        <div className="keyboard-container">
            <Header categories={categories} logo={logo} />
            <div className="keyboard-content">
                <h1 className="keyboard-title">Keyboard Collection</h1>
                <div className="keyboard-list">
                    {data && data.map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Keyboard;
