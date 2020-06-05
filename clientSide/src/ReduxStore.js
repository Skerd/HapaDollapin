//A store hold the whole "State tree" of the application
//The only way to change the state inside it is to dispatch an "action" to it

import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';      //bringing things together
import rootReducer from './Redux/reducers'; //reducing all files into 1

const initialState = {}; //empty initial state for our application

const middleware = [thunk];

const ReduxStore = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default ReduxStore;