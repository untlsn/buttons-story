import { renderToString } from 'react-dom/server';

export default function renderTemplate(template, appHtml, headTags) {
  return template
    .replace('<!--app-html-->', appHtml)
    .replace('<!--head-html-->', renderToString(headTags));
}
