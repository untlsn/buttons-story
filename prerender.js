const fs = require('fs');
const path = require('path');

const toAbsolute = (p) => path.resolve(__dirname, p);
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8').replace(/>\s+</g, '><');

const bootstrap = async () => {
  const { render, names } = await import('./dist/server/entry-server.js');
  const staticNames = names.filter((name) => !name.includes('['));

  for (const _url of staticNames) {
    const url = `/${_url.replace(/(\.\/pages\/)|(index)|(\.[tj]sx)/g, '')}`;
    const appHtml = await render(url);

    const html = template.replace('<!--app-html-->', appHtml);

    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }
};

bootstrap();
