import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';
import reducers from '../reducers/index';

const store = createStore(
    reducers,
    DevTools.instrument()
    );

store.dispatch()

export default store;