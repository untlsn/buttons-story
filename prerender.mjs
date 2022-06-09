import fs from 'fs';
import renderTemplate from './server/renderTemplate.mjs';
import { toAbsolute } from './server/root.mjs';
import print from './server/print.mjs';

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8').replace(/>\s+</g, '><');

const bootstrap = async () => {
  const { render, names } = await import('./dist/server/entry-server.js');
  const staticNames = names.filter((name) => !name.includes('['));

  // eslint-disable-next-line no-restricted-syntax
  for (const _url of staticNames) {
    const url = `/${_url.replace(/(\.\/pages\/)|(index)|(\.[tj]sx)/g, '')}`;
    // eslint-disable-next-line no-await-in-loop
    const appHtml = await render(url);

    const html = renderTemplate(template, appHtml);

    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    print('pre-rendered:', filePath);
  }
};

bootstrap();
