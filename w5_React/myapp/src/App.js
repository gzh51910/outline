// React在每个组件中都必须引入，哪怕你使用React变量
import React from 'react';

// import TodoList from './components/TodoList/'
import Life from './components/Life'

// function App() {
//   return (
//     <div className="App">
//       Hello XXX
//       <Life/>
//       {/* <TodoList/> */}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      age:18
    }
  }
  render() {
    return (
      <div className="App">
        Hello {this.state.age}
        <Life age={this.state.age} />
        <button onClick={()=>{
          this.setState({
            age:18
          })
        }}>修改年龄{this.state.age}</button>
      </div>
    )
  }
}

export default App;
