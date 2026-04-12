// import Footer from "../../Component/Footer";
// import Header from "../../Component/Header";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { use, useState } from 'react';

function Login({ logo }) {
    // const [modal, setModal] = useState(false);

    const [id, setId] = useState('abcd');
    const [pw, setPw] = useState('1111');
    // const name = "성민준";
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    // const [confirmId, setConfirmId] = useState('');
    // const [confirmPw, setConfirmPw] = useState('');
    // const [newPw, setNewPw] = useState('');
    // const [confirmName, setConfirmName] = useState('');
    const navigate = useNavigate();

    const logIn = () => {
        const found = (inputId === id && inputPw === pw);
        if (found) {
            alert("로그인 완료! 메인페이지로 이동합니다.")
            navigate('/')
        } else if (inputId !== id && inputPw === pw) {
            alert("아이디가 틀렸습니다.")
        } else {
            alert("비밀번호가 틀렸습니다.")
        }
    }

    // const editPassword = () => {
    //     const confirm = (confirmId === id && confirmPw === pw && confirmName === name)

    //     if(confirm) {
    //         setPw(newPw)
    //         alert("비밀번호가 변경되었습니다.")
    //         setModal(!modal)
    //     }else if(confirmId !== id && confirmPw === pw && confirmName === name){
    //         alert("아이디가 틀렸습니다.")
    //     }else if(confirmId === id && confirmPw !== pw && confirmName === name){
    //         alert("현재 비밀번호가 틀렸습니다.")
    //     }else if(confirmId === id && confirmPw === pw && confirmName !== name){
    //         alert("이름이 틀렸습니다.")
    //     }else{
    //         alert('아이디, 비밀번호, 또는 이름을 틀렸습니다.')
    //     }
    // }

    return (
        <div>
            {/* <Header /> */}
            <div className='title' onClick={() => navigate('/')}>
                <img className='title-logo' src={logo} alt="Login" />
            </div>
            <input className='input-ID' type="text" onChange={(e) => { setInputId(e.target.value) }} placeholder='아이디' />
            <input className='input-password' type="password" onChange={(e) => { setInputPw(e.target.value) }} placeholder='비밀번호' />
            <button className='button' onClick={() => logIn()}>로그인</button>
            {/* <button className='button1' onClick={() => setModal(!modal)}>비밀번호 수정하기</button> */}

            {/* {modal ? (
                <div>
                <h1 className='text'>
                    비밀번호 수정하기
                </h1>
                <p>
                    <span className='text'>이름 : </span>
                    <input className='input'
                    type="text" placeholder
                    onChange={(e)=>{setConfirmName(e.target.value)}}></input>
                    <span className='text'>아이디 : </span>
                    <input className='input'
                    type="text" placeholder
                    onChange={(e)=>{setConfirmId(e.target.value)}}></input>
                    <span className='text'>현재 비밀번호 : </span>
                    <input className='input'
                    type="text" placeholder
                    onChange={(e)=>{setConfirmPw(e.target.value)}}></input>
                    <span className='text'>변경할 비밀번호 : </span>
                    <input className='input'
                    type="text" placeholder
                    onChange={(e)=>{setNewPw(e.target.value)}}></input>
                    <button className='button' onClick={() => editPassword()}>변경하기</button>
                </p>
                
                </div>
            ):(
                null
            )} */}
            {/* <Footer /> */}
        </div>
    )
}
export default Login