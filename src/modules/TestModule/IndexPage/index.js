/**
 * @file test page
 * @author zhonghuidong
 * @date 2019-06-11
 */
import { h, c } from "utils";
import axios from "axios";
import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { observer, inject } from "mobx-react";
import style from "./style.less";

@inject(["indexPageStore"])
@observer
export default class Root extends Component {
    componentDidMount() {
        // 代理
        axios.get(
            "/comments/hotflow?id=4372148896377528&mid=4372148896377528&max_id_type=0"
        );
    }

    render() {
        const { props } = this;
        return h(
            "div",
            { className: c("index-page-wrap") },
            "index",
            renderRoutes(props.route.routes)
        );
    }
}
