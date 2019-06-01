import React from 'react';
import ReactDOM from 'react-dom';
// Import Provider component from react-redux library
import { Provider } from 'react-redux';
// Import createStore function from redux
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);