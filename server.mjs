import fs from 'fs';
import express from 'express';
import renderTemplate from './server/renderTemplate.mjs';
import { toAbsolute } from './server/root.mjs';
import print from './server/print.mjs';

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort,
) {
  const indexProd = isProd
    ? fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
    : '';

  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(toAbsolute('dist/client'), {
        index: false,
      }),
    );
  }

  // eslint-disable-next-line consistent-return
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template;
      let render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(toAbsolute('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = indexProd;
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const context = {};
      const appHtml = render(url, context);

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url);
      }

      const html = renderTemplate(template, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e);
      print(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

const PORT = 3000;

if (!isTest) {
  createServer().then(({ app }) => app.listen(PORT, () => {
    print(`http://localhost:${PORT}`);
  }));
}
