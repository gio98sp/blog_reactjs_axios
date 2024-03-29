import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { Home } from './routes/Home';
import { NewPost } from './routes/NewPost.jsx';
import { Post } from './routes/Post';
import { Admin } from './routes/Admin';
import { EditPost } from './routes/EditPost';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <NewPost />,
      },
      {
        path: '/posts/:id',
        element: <Post />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/posts/edit/:id',
        element: <EditPost />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
