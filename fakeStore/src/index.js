import React from 'react';
import RouterExample from './RouterExample';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/Produtos/Produtos';
import reportWebVitals from './reportWebVitals';

import {MyProvider} from "./context/context";
import {ThemeProvider} from "styled-components";



const temaDaAmericanas = {
  color: "tomato",
};

const temaSubmarino = {
  color: "blue",
};

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <ThemeProvider theme={temaSubmarino}>
        <RouterExample />
      </ThemeProvider>
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
