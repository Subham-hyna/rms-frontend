import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { Provider } from "react-redux";
import store from "./redux/store";
import ThemeProvider from './ThemeProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <ThemeProvider>
          <App />
    </ThemeProvider>
  </Provider>
  </React.StrictMode>
);

