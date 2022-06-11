import { Routes } from 'react-router-dom';
import 'uno.css';
import '~/assets/style/reset.css';
import '~/assets/style/root.css';
import { Link, Title } from 'react-head';
import type { Route } from '~/routes';
import favicon from '~/assets/images/favicon.svg';
import LeftNav from '~/components/organisms/LeftNav';

export default function App({ routes }: { routes: Route[] }) {
  return (
    <>
      <Link rel="icon" type="image/svg+xml" href={favicon} />
      <Title>App</Title>
      <div className="grid grid-cols-[1fr_5fr] min-h-screen">
        <LeftNav />
        <Routes>
          {routes.map(({ path, Comp }) => (
            <Route key={path} path={path} element={<Comp />} />
          ))}
        </Routes>
      </div>
    </>
  );
}
