import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ex1 from './Ex1';
import reportWebVitals from './reportWebVitals';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex6 from './Ex6';
import Ex9 from './EX9';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex5 from './Ex5';
import Ex10 from './Ex10';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ex1/>
    <Ex2/>
    <Ex3/>
    <Ex4/>
    <Ex5/>
    <Ex6/>
    <Ex7/>
    <Ex8/>
    <Ex9/>
    <Ex10/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
