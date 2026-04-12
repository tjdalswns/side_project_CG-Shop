// import Header from "../../Component/Header";
// import Footer from "../../Component/Footer";
import { useNavigate } from 'react-router-dom';
import './Main.css';
import MainSlider from './Component/MainSlider';
import Notice from '../Notice/Notice';

const Main = ({ Header, Footer, categories, logo, sliderImages, notices }) => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <Header categories={categories} logo={logo} />
            <div className="content">
                <MainSlider images={sliderImages} />
                <Notice notices={notices} />
                {/* <div className="button-group">
                    <button onClick={() => { navigate('/sub') }}>서브 페이지 이동하기</button>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Main;