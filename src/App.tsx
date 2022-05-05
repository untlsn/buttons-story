import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import pages from '~react-pages';

export default function App() {
  const routes = useRoutes(pages);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {routes}
    </Suspense>
  );
}
