import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // importar el archivo CSS de Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <div className="container"> {/* Utilizar la clase "container" de Bootstrap */}
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);