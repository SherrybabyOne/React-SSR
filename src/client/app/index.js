//浏览器端页面结构渲染入口

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from '../router/index';
import matchRoute from '../../share/match-route';
import routeList from '../router/route-config';

//初始数据
const initialData = JSON.parse(document.getElementById('ssrTextInitData').value);

//查找路由
const route = matchRoute(document.location.pathname, routeList);

//设置组件初始化数据 [关键点]
route.initialData = initialData;

//渲染index
ReactDom.hydrate(
  <BrowserRouter>
    <App routeList={routeList}/>
  </BrowserRouter>,
  document.getElementById('root')
);
