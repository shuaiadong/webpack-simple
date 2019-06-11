/**
 * @file {{compName}} module
 * @author {{userName}}
 * @date {{today}} 
 */

import Root from 'src/layout/Root';
import {h, c} from 'utils';
import asyncComponent from 'utils/asyncComponent';

const Router = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                exact: true,
                component: asyncComponent(() => import(/*webpackChunkName:'{{compName}}-IndexPage'*/'./IndexPage'))
            },
            {
                path: '/a',
                component: ()=> h('div', {}, '2')
            }
        ]
    }
]
export default Router;