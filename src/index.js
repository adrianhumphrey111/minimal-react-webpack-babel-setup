import React from 'react';
import ReactDOM from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import App from './App'

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();