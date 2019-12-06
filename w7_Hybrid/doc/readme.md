# Hybrid

## day7-2

### 知识点
* App分类
    * web App
        * 缺点
            * js
    * native App
        * 优点
            * 硬件调用
        * 缺点
            * 成本高
            * 不能跨平台
    * Hybrid App
        > 综合WebApp与NativeApp的优点
        * 开发模式
            * Native主导(主流)
                * native工程师：硬件接口开发、打包、上线
                * 前端开发工程师：页面展示、接口联调、用户体验
                * 后端开发工程师：数据接口、业务逻辑
            * h5主导（云平台：DCloud）
                * 前端开发工程师：页面展示、接口联调、用户体验
                * 后端开发工程师：数据接口、业务逻辑
* h5+接口
    > 通过window.plus对象获取h5+的接口
    * 常用接口
        * camera
        * io
        * gallary
        * nativeUI
        * webview
        * speech
        * share
        * geolocation + 百度地图
        * device
        * Fingerprint
        * Contact


* 垃圾回收机制（自动）
    * 引用计数      IE6
    * 标记清除

    ```js
        (function(){
            var a = 100;

            function show(){
                return a*a;
            }

            var obj1 = {name:'obj1'}
            var obj2 = {name:'boj2'}

            obj1.link = obj2.name;
            obj2.link = obj1.name;


            btn.onclick = function(){
                //a
            }

        })()
    ```