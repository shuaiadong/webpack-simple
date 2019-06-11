/**
 * @file {{compName}} module
 * @author {{userName}}
 * @date {{today}} 
 */
import {h} from 'utils'
import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import rootStore  from './store'
import {Provider} from 'mobx-react';

import {HashRouter} from 'react-router-dom';
import Routers from './routers';
import {renderRoutes} from 'react-router-config';

render(
    h(Provider, {...new rootStore()},
        h(HashRouter, {},
            renderRoutes(Routers)
        )
    ),
    document.getElementById('root')
);