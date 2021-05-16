import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/**Inportação dos componentes do react router */
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


