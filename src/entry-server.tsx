import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { getRoutes } from '~/routes';

const { routes, names } = getRoutes();

export function render(url: string) {
  return ReactDomServer.renderToString(
    <StaticRouter location={url}>
      <App routes={routes} />
    </StaticRouter>,
  );
}
export { names };
