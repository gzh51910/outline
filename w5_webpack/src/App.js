import React from 'react';

import Home from './pages/Home';
import './App.scss';

const Styles = {
    container:{
        color:'#f00'
    }
}

function App(){
    return (
        <div className="container">
            APP
            <Home/>
        </div>
    )
}

export default App;