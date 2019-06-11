/**
 * @file {{compName}} page
 * @author {{userName}}
 * @date {{today}} 
 */
import {h, c} from 'utils';
import axios from 'axios';
import React, {Component} from 'react';
import {renderRoutes} from 'react-router-config';
import {observer, inject} from 'mobx-react';
import style from './style.less';

@inject(['indexPageStore'])
@observer
export default class Root extends Component {


    render() {
        const {props} = this;
        return h('div', {className: c('{{compName}}-page-wrap')}, 
            '{{compName}} - index',
            renderRoutes(props.route.routes)
        )
    }
}
