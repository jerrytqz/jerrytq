import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import './index.css';
import GeneralError from './shared/userInterfaces/errors/GeneralError/GeneralError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<App />} errorElement={<GeneralError />} />,
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
