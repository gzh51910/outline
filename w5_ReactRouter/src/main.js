import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom'

import App from './App';

render(
    <HashRouter>
        {/* <Route component={App}/> */}
        <App/>
    </HashRouter>,
    document.querySelector('#app')
)