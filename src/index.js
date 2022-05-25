import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Categories from './pages/categories';
import WeddingCakes from  './pages/weddingCakes'
import ChildrenCakes from './pages/childrenCakes';
import FondatCakes from './pages/fondantCakes';
import ButterCreamCakes from './pages/butterCreamCakes';
import TallCakes from './pages/tallCakes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="weddingCakes" element={<WeddingCakes />} />
      <Route path="childrenCakes" element={<ChildrenCakes />} />
      <Route path="fondatCakes" element={<FondatCakes />} />
      <Route path="butterCreamCakes" element={<ButterCreamCakes />} />
      <Route path="tallCakes" element={<TallCakes />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
