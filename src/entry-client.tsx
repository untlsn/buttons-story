import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'uno.css';
import '~/assets/style/reset.css';
import { getLazyRoutes } from '~/routes';

const routes = getLazyRoutes();

const isProd = import.meta.env.MODE == 'production';

const container = document.getElementById('app')!;
const entry = (
  <React.StrictMode>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </React.StrictMode>
);

if (isProd) {
  ReactDOM.hydrateRoot(container, entry);
} else {
  ReactDOM.createRoot(container).render(entry);
}
