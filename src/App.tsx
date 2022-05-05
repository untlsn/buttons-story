import { Suspense } from 'react';
import './App.css'

import pages from '~react-pages';
import { useRoutes } from 'react-router-dom';

export default function App() {
  const routes = useRoutes(pages);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {routes}
    </Suspense>
  )
}
