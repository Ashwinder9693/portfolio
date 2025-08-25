import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

// HashRouter ignores the server, so no 404 issues on GH Pages
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter /* basename is optional with HashRouter */>
      <App />
    </HashRouter>
  </React.StrictMode>
);
