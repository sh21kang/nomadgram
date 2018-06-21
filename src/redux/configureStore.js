import { createStore, combineReducers,applyMiddleware } from "redux";
import  users from './modules/users';
import thunk from 'redux-thunk';


const middlewares =[thunk];
const env = process.env.NODE_ENV;

if(env ==="development"){
    const {logger} = require('redux-logger');
    middlewares.push(logger);
}

const reducer = combineReducers({
    users   
})

let store = initialState => createStore(reducer,applyMiddleware(...middlewares));   //unpack the array ...

export default store();