/**
 * @file Ui-demo page
 * @author zhonghuidong
 * @date 2019-06-11
 */
import { h, c } from "utils";
import axios from "axios";
import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { observer, inject } from "mobx-react";
import style from "./style.less";
import { dynamicRoutes } from "../routers";

@inject(["indexPageStore"])
@observer
export default class Root extends Component {
    render() {
        console.log(dynamicRoutes, "dynamicRoutes");
        const { props } = this;
        return h(
            "div",
            { className: c("ui-demo-page-wrap") },

            "Ui-demo - index",
            h(
                "div",
                {},
                dynamicRoutes.map(key => {
                    return h(
                        "a",
                        {
                            key: key.path,
                            href: "javascript:;",
                            onClick: () => {
                                this.props.history.push(key.path);
                            }
                        },
                        key.path
                    );
                })
            ),
            renderRoutes(props.route.routes)
        );
    }
}
