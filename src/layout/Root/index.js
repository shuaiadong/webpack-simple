import { h } from 'utils';
import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

export default class Root extends Component {
    render() {
        const { props } = this;
        return h('div', {}, 'header', renderRoutes(props.route.routes));
    }
}
