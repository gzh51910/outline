# VueCLI

## 安装
```bash
    npm install -g @vue/cli
    #or
    yarn global add @vue/cli
```
### 依赖与扩展
> 以下依赖会自动安装

* @vue/cli-service
    * @vue/cli-service-global
* webpack
    * webpack-dev-server
* CLI 插件

## 快速原型开发
零配置开发或编译单个.vue文件（需全局安装@vue/cli-service-global）
* 
```bash
    # 测试
    vue serve ./App.vue

    # 编译
    vue build ./App.vue
```

## 创建项目vue create
```bash
    # 命令行
    vue create myproject

    # 使用图形化界面
    vue ui
```

## 插件安装vue add
```bash
    vue add @vue/eslint #等效于 vue add @vue/cli-plugin-eslint

    # 路由
    vue add router

    # vuex
    vue add vuex
```

## vue.config.js配置
* publicPath
* outputDir
* assetsDir
    >相对于outputDir
* runtimeCompiler
    >是否使用包含运行时编译器的 Vue 构建版本(vue.esm.js)
* devServer
    >测试服务器，与webpack一致

## 问题
* 图片无法显示的问题
    1. 使用相对路径
    ```js
        url('./image.png') 
        <img src="i./mage.png"/>
        //会被翻译为 
        require('./image.png')
    ```
    2. 放到public文件夹张，使用绝对路径
    >不经过webpack处理
    3. 变量
        * require.context()