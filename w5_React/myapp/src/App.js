// React在每个组件中都必须引入，哪怕你使用React变量
import React from 'react';

import TodoList from './components/TodoList/'

function App() {
  return (
    <div className="App">
      Hello XXX

      <TodoList/>
    </div>
  );
}

export default App;
