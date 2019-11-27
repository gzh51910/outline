import {combineReducers} from 'redux';
import cartReducer from './cart';
import commonReducer from './common';

let rootReducer = combineReducers({
    cart:cartReducer,
    common:commonReducer
})
export default rootReducer;