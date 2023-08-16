import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../public/css/tailwind.scss";
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer position="top-center" autoClose={3000} closeOnClick/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
