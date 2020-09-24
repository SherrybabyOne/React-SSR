import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routeList from '../../client/router/route-config';
import { Helmet } from 'react-helmet';
import Layout from '../../client/app/layout';
import matchRoute from '../../share/match-route';

export default async (ctx, next) => {
    
	//获得请求的 path
	const path = ctx.request.path;

	//查找到的目标路由对象
	const targetRoute = matchRoute(path,routeList);
	//数据预取 -> fetchResult
	const fetchDataFn = targetRoute.component.getInitialProps;
	let fetchResult = {};
	if (fetchDataFn){
		fetchResult = await fetchDataFn();
		targetRoute.initialData = fetchResult;
	}

	//渲染组件为 html 字符串
	const html = renderToString(
		<StaticRouter>
			<Layout>
				<targetRoute.component initialData={fetchResult} />
			</Layout>
		</StaticRouter>
	);

	const helmet = Helmet.renderStatic();

	//导入资源处理库
	const getAssets = require('../common/assets');
	// 得到静态资源
	const assetsMap = getAssets();


	ctx.body=
		`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			${helmet.title.toString()}
			${helmet.meta.toString()}
			${assetsMap.css.join('')}
		</head>
		<body>
				<div id="root">
					${html}
				</div>
				<textarea id="ssrTextInitData" style="display:none;">
				${JSON.stringify(fetchResult)}
				</textarea>
		</body>
		</html>
		${assetsMap.js.join('')}
		`;

	await next();
}