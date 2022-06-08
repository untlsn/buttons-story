import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'uno.css';
import '~/assets/style/reset.css';
import { getLazyRoutes } from '~/routes';

const routes = getLazyRoutes();

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <React.StrictMode>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </React.StrictMode>,
);
