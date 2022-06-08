import { Routes } from 'react-router-dom';
import 'uno.css';
import '~/assets/style/reset.css';
import type { Route } from '~/routes';

export default function App({ routes }: { routes: Route[] }) {
  return (
    <Routes>
      {routes.map(({ path, Comp }) => (
        <Route key={path} path={path} element={<Comp />} />
      ))}
    </Routes>
  );
}
