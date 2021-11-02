import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { renderRoutes } from 'react-router-config';
import { IconStyle } from './assets/iconfont/iconfont'
import store from './store/index';
import routes from './routes/index';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes (routes) }
    </HashRouter>
  )
}

export default App;
