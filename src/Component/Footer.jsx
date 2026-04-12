
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer-container">
            <div className="footer-button-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center' }}>
                <button onClick={() => navigate('/qna')}>1:1 문의</button>
                <button className="btn-FAQ" onClick={() => navigate('/faq')}>FAQ</button>
            </div>
            <p className='footer-content'>SHOP NAME : CG PC
                <br />
                OWNER : 성민준
                <br />
                ADDRESS : 부산광역시 강서구 명지 오션시티
                <br />
                PHONE : 010-3846-7594
                <br />
                EMAIL : VORT264@gmail.com
            </p>
            <p>&copy; 2026 CG PC. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
