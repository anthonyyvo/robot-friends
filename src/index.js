import React from 'react';
import ReactDOM from 'react-dom';
import './components/Card.css';
import Card from './components/Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';
import CardList from './components/CardList';
import App from './containers/App'
import './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
