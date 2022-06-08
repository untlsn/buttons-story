import React, { lazy, Suspense } from 'react';

function getPath(path: string) {
  return path
    .match(/\.\/pages\/(.*)\.tsx$/)![1]
    .replace(/index/g, '')
    .replace(/\[.+]/g, (data) => `:${data.slice(1, -1)}`);
}

export function getLazyRoutes(): Route[] {
  const pages = import.meta.glob('./pages/**') as Record<string, () => Promise<{ default: any }>>;

  return Object.keys(pages).map((path) => {
    const Component = lazy(pages[path]);

    return {
      path: getPath(path),
      Comp: () => (
        <Suspense fallback={<>Loading...</>}>
          <Component />
        </Suspense>
      ),
    };
  });
}

export function getRoutes(): Route[] {
  const pages = import.meta.globEager('./pages/**');

  return Object.keys(pages).map((path) => {
    const Component = pages[path].default;

    return {
      path: getPath(path),
      Comp: () => (
        <Suspense fallback={<>Loading...</>}>
          <Component />
        </Suspense>
      ),
    };
  });
}

export interface Route { path: string, Comp: any }
