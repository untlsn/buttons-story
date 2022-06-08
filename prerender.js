const fs = require('fs');
const path = require('path');

const toAbsolute = (p) => path.resolve(__dirname, p);
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8').replace(/>\s+</g, '><');

// determine routes to pre-render from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.[tj]sx$/, '').toLowerCase();
    return name === 'home' ? '/' : `/${name}`;
  });

const bootstrap = async () => {
  const { render } = await import('./dist/server/entry-server.js');

  for (const _url of routesToPrerender) {
    const url = _url.replace(/index/g, '');
    const appHtml = await render(url);

    if (!appHtml) continue;

    const html = template.replace('<!--app-html-->', appHtml);

    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }
};

bootstrap();
