/**
 * @file TestPage index
 * @author zhonghuidong
 * @date 2019-06-11
 */
import { h } from "utils";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import style from "./style.less";
import Store from "./store";

@observer
export default class TestPageWrap extends Component {
    constructor(props) {
        super(props);
        this.local = new Store();
    }
    render() {
        return h("div", {}, "TestPage -warp");
    }
}
