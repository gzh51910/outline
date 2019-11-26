import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux';

import App from './App';
import store from './store'

render(
    <Provider store={store}>
        <HashRouter>
            {/* <Route component={App}/> */}
            <App/>
        </HashRouter>
    </Provider>,
    document.querySelector('#app')
)