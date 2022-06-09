import { Helmet } from 'react-helmet';

export default function renderTemplate(template, appHtml) {
  const helmet = Helmet.renderStatic();

  return template
    .replace('<!--app-html-->', appHtml)
    .replace('<!--head-html-->', [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
    ].join(''));
}
