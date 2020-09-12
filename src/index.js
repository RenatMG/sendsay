import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import reduxThunk from 'redux-thunk';
import * as firebase from 'firebase';

const fireBaseConfig={
    apiKey: "AIzaSyC1i4ncLn_Sjy28CWgPUWMpQqgtFHxbzx0",
    authDomain: "sendsay-e8c88.firebaseapp.com",
    databaseURL: "https://sendsay-e8c88.firebaseio.com",
    projectId: "sendsay-e8c88",
    storageBucket: "sendsay-e8c88.appspot.com",
    messagingSenderId: "916927503894",
    appId: "1:916927503894:web:595be959823fd2ada69f37",
    measurementId: "G-LS8Y5DVGQL"
};
firebase.initializeApp(fireBaseConfig);


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);



const rootElement = document.getElementById('root')
const application = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(application, rootElement)

serviceWorker.unregister();
