import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App.jsx'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>)
  ,document.getElementById("root")
);