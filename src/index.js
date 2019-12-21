import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/mdbootstrap/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import rootReducer from './reducers';


const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={store(rootReducer)}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

