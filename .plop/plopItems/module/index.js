/**
 * @file {{compName}} rootDom
 * @author {{userName}}
 * @date {{today}} 
 */
import {h} from 'utils'; 
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';
import Root from './RootStore';
import app from './IndexPage';

render(
    h(Provider, {},
        h(app),
    ),
    document.getElementById('root')
);