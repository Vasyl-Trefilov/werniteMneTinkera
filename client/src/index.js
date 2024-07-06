import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import OrdersClass from "./classes/OrdersClass";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
      order: new OrdersClass()
  }}>
    <App />
  </Context.Provider>
);