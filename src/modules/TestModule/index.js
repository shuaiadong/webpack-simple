/**
 * @file test module
 * @author zhonghuidong
 * @date 2019-06-11
 */
import { h } from 'utils';
import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import rootStore from './store';
import { Provider } from 'mobx-react';

import { HashRouter } from 'react-router-dom';
import Routers from './routers';
import { renderRoutes } from 'react-router-config';

render(
    h(
        Provider,
        { ...new rootStore() },
        h(HashRouter, {}, renderRoutes(Routers))
    ),
    document.getElementById('root')
);
