
/**
 * @file {{compName}} index
 * @author {{userName}}
 * @date {{today}} 
 */
import {h} from 'utils';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import style from './style.less';
import Store from './store';

@observer
export default class {{compName}}Wrap extends Component {
    static demoKey = '{{compName}}_demo'
    static demoName = '{{compName}}'
    constructor(props) {
        super(props)
        this.local = new Store()
    }
    
    render() {
        return h('div', {},
            '{{compName}} -warp'
        )
    }
}