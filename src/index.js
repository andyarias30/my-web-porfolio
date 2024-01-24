import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Porfile from './components/Porfile';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Porfile />
  </React.StrictMode>
);


