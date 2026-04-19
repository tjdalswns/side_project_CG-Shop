import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = ({ categories, logo }) => {
    const navigate = useNavigate();

    return (
        <header className="header-wrapper">
            <div className="header-top">
                <div className="logo" onClick={() => navigate('/')}>
                    <img src={logo} alt="My PC Shop" />
                </div>
                <div className="header-actions">
                    <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
                    <button className="cart-btn" onClick={() => navigate('/cart')}>Cart</button>
                </div>
            </div>
            <nav className="nav-menu">
                <ul>
                    {categories && categories.map((category, index) => (
                        <li key={index} className="nav-item" onClick={() => navigate(`/${category.toLowerCase()}`)}>
                            <span className="nav-link">{category}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;