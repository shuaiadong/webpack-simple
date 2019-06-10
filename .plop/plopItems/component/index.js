
/**
 * @file {{compName}} index
 * @author {{userName}}
 * @date {{today}} 
 */
import {h} from 'utils';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import style from './stype.less';
@inject(['app'])
@observer
export default class {{compName}} extends Component{

    componemtWillMount() {
        style.use();
    }

    componentDidunmount() {
        style.unse()
    }

    render() {
        return h('div', {},
            '{{compName}} -warp'
        )
    }
}