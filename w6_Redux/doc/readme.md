## day6-2

### 复习
* 组件通讯
    * 父->子：props
        1. 在父组件中定义子组件的属性，并传递数据
        2. 使用
            * 函数组件：第一个参数为props
            * 类组件：this.props
    * 子->父
        > 传递父组件的方法到子组件执行
    * 多层级组件传参数
        * 逐层传递
        * Context
            1. 创建Context：`let MyContext = React.createContext(defalutValue)`
            2. 父组件共享数据：Provider
                ```js
                    <MyContext.Provider value={data}></MyContext>
                ```
            3. 子组件获取Context数据
                * contextType
                    ```js
                        SubComponent.contextType = MyContext;
                        this.context.xxx
                    ```
                * Consumer
                    ```js
                        <MyContext.Consumer>
                            {
                                data=>{
                                    return <div></div>
                                }
                            }
                        <MyContext.Consumer>
                    ```

* React & Redux
    > 他们是两个独立的产品，Redux不是React专属，它可以与任何第三方框架配合使用

* Redux
    * 核心概念Store
        * dispatch(action)    修改state的唯一方法
        * getState()          获取state数据
        * subscribe()

    * Reducer：修改数据的方式
        > 在创建store时要事先定义好如何修改上面的数据
        * reducer是一个纯函数
        * 必须返回一个新的state
    * Action    命令（动作）
        * type  
        * payload

* redux使用步骤
    1. 创建store（需要指定state与state的修改方式）
        * 需要定义state
        * 需要定义Reducer
    2. 定义State：状态（数据）
    3. 定义Reducer
        * 修改state的方式
        * 必须返回一个新的state
    4. 使用
        * 获取：store.getState()
        * 修改：store.dispatch(action)
    
* react-redux
    * 利用context把store上的数据传入到react组件中
    * 使用步骤
        1. 在最外层使用`<Provider/>`组件，并共享Store
            ```js
                <Provider store={store}>
            ```
        2. 使用`connect`高阶组件映射数据到组件的props