import { applyMiddleware } from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from '../Reducers/rootReducer';
import { compose } from 'redux';
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= configureStore({reducer:rootReducer},composeEnhancers(applyMiddleware(thunk)))
export default store;