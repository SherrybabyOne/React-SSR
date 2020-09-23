//路由配置文件
import Index from '../pages/index/index';
import List from '../pages/list/index';

export default [
    {
        path: '/index',
        component: Index,
        exact: true //是否精确匹配
    },
    {
        path: '/list',
        component: List,
        exact: true,
    }
];
