import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <h1>ini project</h1>,
        <DevTools />
    </Provider>,
    document.getElementById('root')
);