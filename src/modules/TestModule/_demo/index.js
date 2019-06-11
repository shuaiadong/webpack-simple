/**
 * @file  index
 * @author zhonghuidong
 * @date 2019-06-11
 */
import { h } from "utils";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import style from "./style.less";
import Store from "./store";

@observer
export default class Wrap extends Component {
    static demoKey = "testq";
    static demoName = "zhonghuidong";
    constructor(props) {
        super(props);
        this.local = new Store();
    }

    render() {
        return h("div", {}, "rest-warp");
    }
}
