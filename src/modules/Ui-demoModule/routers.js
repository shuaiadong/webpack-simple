/**
 * @file Ui-demo module
 * @author zhonghuidong
 * @date 2019-06-11
 */

import Root from 'src/layout/Root';
import { h, c } from 'utils';
import asyncComponent from 'utils/asyncComponent';
import IndexPage from './IndexPage';

let route = require.context('src', true, /\/_?demo(-[\w-]*)?\/index\.js$/);

function getUidemo() {
    let routers = [];

    route.keys().forEach(key => {
        let module = route(key).default;
        routers.push({
            component: module,
            path: '/' + module.demoKey,
            name: module.demoName
        });
    });
    return routers;
}

export const dynamicRoutes = getUidemo();

const Router = [
    {
        component: IndexPage,
        routes: [
            // {
            //     path: '/',
            //     exact: true,
            //     component: IndexPage,
            //     // component: asyncComponent(() =>
            //     //     import(
            //     //         /*webpackChunkName:'Ui-demo-IndexPage'*/ './IndexPage'
            //     //     )
            //     // )
            // },
            ...dynamicRoutes
        ]
    }
];
export default Router;
