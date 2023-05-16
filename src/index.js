import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from '../src/components/pages/login/login'
import Register from '../src/components/pages/register/register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  // http://localhost:3001/ -/>  "/"
  {
    path: "/",
    element: <App/>
  },
  // // http://localhost:3001/login -/> '/login'
  {
    path : '/login' ,
    element : <Login/>
  },
  {
    path : '/register' ,
    element : <Register/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
