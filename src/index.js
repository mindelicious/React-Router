import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import DevTools from './DevTools';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Test App</h1>
                <Provider store={store}>
                    <DevTools />
                </Provider>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('root')
);