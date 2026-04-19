import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';
import Sub from './pages/Sub/Sub';
import Login from './pages/Login/Login';
import Mouse from './pages/Mouse/Mouse';
import Keyboard from './pages/Keyboard/Keyboard';
import Headphone from './pages/Headphone/Headphone';
import Monitor from './pages/Monitor/Monitor';
import { mockData } from './data/mockData';
import Header from './Component/Header'
import Footer from './Component/Footer';
import logo from './img/CG_w.png';
import logo_login from './img/CG_b.png';
import Notice from './pages/Notice/Notice';
import NoticeList from './pages/Notice/NoticeList';
import NoticeWrite from './pages/Notice/NoticeWrite';
import NoticeDetail from './pages/Notice/NoticeDetail';
import Qna from './pages/Qna/Qna';
import QnaWrite from './pages/Qna/QnaWrite';
import FAQ from './pages/FAQ/FAQ';
import Buy from './pages/Buy/Buy';
import Cart from './pages/Cart/Cart';
import Hot from './pages/Hot/Hot';

function App() {
  const categories = ["Monitor", "Keyboard", "Mouse", "Headphone", "Hot", "notice/list"];

  const [notices, setNotices] = useState([
    { id: 1, title: 'PC 주변 기기 판매 사이트 오픈 안내', content: '사이트가 정식 오픈되었습니다. 많은 이용 부탁드립니다.', date: '2023-10-01' },
    { id: 2, title: '신규 키보드 입고 안내', content: '새로운 기계식 키보드가 입고되었습니다.', date: '2023-11-15' },
    { id: 3, title: '연휴 배송 일정 안내', content: '설 연휴 기간 동안 배송이 지연될 수 있습니다.', date: '2024-01-20' },
    { id: 4, title: '게이밍 마우스 특가 이벤트', content: '게이밍 마우스를 특가에 만나보세요.', date: '2024-03-05' },
    { id: 5, title: '고객센터 운영시간 변경 안내', content: '고객센터 운영시간이 변경되었습니다.', date: '2024-05-12' },
    { id: 6, title: '여름 맞이 쿨링 패드 기획전', content: '노트북 쿨링 패드 할인을 시작합니다.', date: '2024-06-01' }
  ].sort((a, b) => a.id - b.id)); // 과거순/번호순 정렬

  const addNotice = (title, content) => {
    const newId = notices.length > 0 ? Math.max(...notices.map(n => n.id)) + 1 : 1;
    const date = new Date().toISOString().split('T')[0];
    setNotices([...notices, { id: newId, title, content, date }]);
  };

  const [qnaList, setQnaList] = useState([
    { id: 1, type: '배송', title: '배송이 아직 안왔어요', content: '지난주에 주문했는데 언제쯤 도착할까요?', author: '홍길동', date: '2024-06-01', isSecret: false, password: '' },
    { id: 2, type: '교환/반품', title: '마우스 불량으로 교환 요청합니다', content: '마우스 휠이 작동하지 않아서 새 제품으로 교환받고 싶습니다.', author: '김철수', date: '2024-06-02', isSecret: true, password: '1234' },
    { id: 3, type: '결제', title: '결제 수단 변경 가능한가요?', content: '신용카드가 아니라 무통장입금으로 변경하고 싶은데 가능한가요?', author: '이영희', date: '2024-06-03', isSecret: false, password: '' }
  ].sort((a, b) => b.id - a.id));

  const addQna = (type, title, content, isSecret, password) => {
    const newId = qnaList.length > 0 ? Math.max(...qnaList.map(q => q.id)) + 1 : 1;
    const date = new Date().toISOString().split('T')[0];
    setQnaList([{ id: newId, type, title, content, author: '익명', date, isSecret, password }, ...qnaList]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Main
            logo={logo}
            logo_login={logo_login}
            Header={Header}
            Footer={Footer}
            categories={categories}
            sliderImages={[
              mockData.keyboard[0],
              mockData.keyboard[1],
              mockData.keyboard[2]
            ]}
            notices={notices}
          />} />
        <Route path='/sub' element={
          <Sub
            logo={logo}
            Header={Header}
            Footer={Footer} />} />
        <Route path='/login' element={
          <Login logo={logo_login} />} />
        <Route path='/mouse' element={
          <Mouse
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            data={mockData.mouse} />} />
        <Route path='/keyboard' element={
          <Keyboard
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            data={mockData.keyboard} />} />
        <Route path='/headphone' element={
          <Headphone
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            data={mockData.headphone} />} />
        <Route path='/monitor' element={
          <Monitor
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            data={mockData.monitor} />} />
        <Route path='/notice/write' element={
          <NoticeWrite
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            addNotice={addNotice} />} />
        <Route path='/notice/:id' element={
          <NoticeDetail
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            notices={notices} />} />
        <Route path='/notice/list' element={
          <NoticeList
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            notices={notices} />} />
        <Route path='/qna' element={
          <Qna
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            qnaList={qnaList} />} />
        <Route path='/qna/write' element={
          <QnaWrite
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            addQna={addQna} />} />
        <Route path='/faq' element={
          <FAQ
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            faqData={mockData.faq} />} />
        <Route path='/buy' element={
          <Buy
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories} />} />
        <Route path='/cart' element={
          <Cart
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories} />} />
        <Route path='/hot' element={
          <Hot
            logo={logo}
            Header={Header}
            Footer={Footer}
            categories={categories}
            data={mockData.hot} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
