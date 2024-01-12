import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import React from 'react';
import {
  ArticlePage,
  ErrorPage,
  HomePage,
  SearchPage,
  SectionPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'section/:id',
        element: <SectionPage />,
      },
      {
        path: 'article/:id',
        element: <ArticlePage />,
      },
      {
        path: 'search/:id',
        element: <SearchPage />,
      },
    ],
  },
]);
