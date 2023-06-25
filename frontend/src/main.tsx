import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App.tsx';
import "./index.css";
import { LandingPage } from './DevelopersPortfolio/LandingPage.tsx';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/landingpage' element={<LandingPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
