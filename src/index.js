import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux'
import { configureStore, combineReducers, applyMiddleware } from 'redux'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);