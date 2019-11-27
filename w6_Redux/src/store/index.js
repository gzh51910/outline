import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

// saga使用步骤
// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();


// const store = createStore(rootReducer,composeWithDevTools());

// 2.将 sagaMiddleware 连接至 Store
// const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware),composeWithDevTools()));
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

// 3.运行saga配置
sagaMiddleware.run(rootSaga);

export default store;