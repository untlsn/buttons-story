import { Routes } from 'react-router-dom';
import 'uno.css';
import '~/assets/style/reset.css';
import Helmet from 'react-helmet';
import type { Route } from '~/routes';

export default function App({ routes }: { routes: Route[] }) {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#E22D40" />
        <title>App</title>
      </Helmet>
      <Routes>
        {routes.map(({ path, Comp }) => (
          <Route key={path} path={path} element={<Comp />} />
        ))}
      </Routes>
    </>
  );
}
