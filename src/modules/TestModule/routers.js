/**
 * @file test module
 * @author zhonghuidong
 * @date 2019-06-11
 */

import Root from "src/layout/Root";
import { h, c } from "utils";
import asyncComponent from "utils/asyncComponent";

const Router = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                exact: true,
                component: asyncComponent(() =>
                    import(
                        /*webpackChunkName:'test-IndexPage2'*/ "./IndexPage/index"
                    )
                )
            },
            {
                path: "/test",
                exact: true,
                component: asyncComponent(() =>
                    import(/*webpackChunkName:'TestPage'*/ "./TestPage/index")
                )
            }
        ]
    }
];
export default Router;
