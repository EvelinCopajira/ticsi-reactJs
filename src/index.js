import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//incluye los cambios en el id 'root' de index.html y ejecuta a través del DOM lo que tenga en App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
