import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './components/redux/rootReducer';
import App from "./App";
import "tailwindcss/tailwind.css";

const store = createStore(rootReducer);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
