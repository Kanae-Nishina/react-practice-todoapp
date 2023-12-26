import React from 'react';
import ReactDOM from 'react-dom/client';
import { Todo }  from './Todo.jsx';
import reportWebVitals from './reportWebVitals.js';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <main>
        <Todo />
      </main>
    </CookiesProvider>
  </React.StrictMode>
);

reportWebVitals();