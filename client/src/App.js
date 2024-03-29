import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import MainPage from './components/views/MainPage/MainPage'
import PortfolioPage from './components/views/PortfolioPage/PortfolioPage'
import MyinformationPage from './components/views/MyinformationPage/MyinformationPage'
import NoticePage from './components/views/NoticePage/NoticePage'

import Auth from './hoc/auth';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}></Route>
      <Route exact path="/login" element={<LoginPage/>}></Route>
      <Route exact path="/register" element={<RegisterPage/>}></Route>
      <Route exact path="/main" element={<MainPage/>}></Route>
      <Route exact path="/portfolio" element={<PortfolioPage/>}></Route>
      <Route exact path="/myinformation" element={<MyinformationPage/>}></Route>
      <Route exact path="/notice" element={<NoticePage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
