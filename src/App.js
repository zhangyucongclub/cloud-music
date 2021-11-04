import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { renderRoutes } from 'react-router-config'; //renderRoutes 读取路由配置转化为 Route 标签【只能渲染一层路由】
import { IconStyle } from './assets/iconfont/iconfont';
import store from './store';
import routes from './routes/index';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes (routes) }
        {/* <i className="iconfont">&#xe62b;</i> */}
      </HashRouter>
    </Provider>
    
  );
}

export default App;
