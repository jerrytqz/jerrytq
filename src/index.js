import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'; 

import './index.css';
import App from './App';
import GeneralError from './shared/UI/Errors/GeneralError/GeneralError';

const router = (createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<App/>} errorElement={<GeneralError/>}/>
  )
));

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
