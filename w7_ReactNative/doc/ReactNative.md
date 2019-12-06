# React Native

## 介绍
React Native (简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是React 在原生移动应用平台的衍生产物，使用JS、JSX、CSS开发原生应用，目前支持iOS和安卓两大平台，一句话，基于React开发原生应用（调用原生组件）。
> 官网地址：https://reactnative.cn/docs/getting-started.html

## 环境安装
以windows+Android平台来安装React Native环境

* Nodejs
> Node 的版本必须大于等于 v10.x

* React Native命令行工具
> 全局安装react-native-cli
```bash
    npm install -g react-native-cli
```

* python
> Python 的版本必须为 2.x（不支持 3.x）

* JDK（Java SE Development Kit ）
> JDK 的版本必须是 1.8（目前不支持 1.9 及更高版本）

* Android Studio
    > 安装 Android Studio 来获得编译 Android 应用所需的工具和环境

    * 安装 Android SDK
        * SDK Manager -> 切换"SDK Platforms" -> 勾选"Show Package Details"
            * -> 勾选Android SDK Platform 28
            * -> 勾选Intel x86 Atom_64 System Image
        * SDK Manager -> 切换"SDK Tools"
            * -> 28.0.3（React Native 所必须的版本）
    * 配置环境变量
        > 设置`ANDROID_HOME`**系统变量**到`c:\Users\你的用户名\AppData\Local\Android\Sdk`
        
        > 设置`%ANDROID_HOME%\platform-tools`到path

> PS：安装以上工具尽量使用稳定的翻墙工具，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，导致无法安装的情况

## 开始一个项目

1. 创建新项目
```bash
    react-native init myRN
```

2. 编译并运行
> 注意第一次运行时需要下载大量编译依赖，耗时可能数十分钟
> 需打开`USB调试`及`允许安装未知方源`

```bash
    # 以下命令检测设备连接状态（包括模拟器）
    # adb devices

    # android
    react-native run-android

    # iOS
    react-native run-ios
```

3. 调试与热更新
> 摇一摇手机（或在命令行运行：`adb shell input keyevent 82`），打开`Enable Hot Reloading` 或 `Enable Live Reload`


## 使用
React Native 看起来很像 React，只不过其基础组件是原生组件而非 web 组件

### 内置组件
* 基础组件
    * View  容器
    * Image 图片
        * source
    * Text  文本展示
    * ScrollView    滚动容器
* 交互组件
    * TextInput 文本输入
        * onChangeText
        * onSubmitEditing
    * Button    按钮
        * onPress
    * Switch    开关按钮
    * Picker
* 列表组件
    * FlatList  长列表
        >和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
        * data
        * renderItem
    * SectionList 分组列表
        * sections  数据属性
        * renderSectionHeader 渲染标题
        * renderItem    每条数据的渲染方式
* Android & iOS特有组件
    > 请查看官方文档
* 其他组件
    * ActivityIndicator 加载中
    * Alert 消息提示窗
    * WebView   显示web内容
    * Animated 动画组件
> 详情请查看官网 https://facebook.github.io/react-native/

### API
> 详情请查看官网 https://facebook.github.io/react-native/


## ReactNative UI框架

### react-native-elements
1. 安装`react-native-elements`
```bash
    # yarn
    yarn add react-native-elements

    # npm
    npm i react-native-elements --save
```
2. 安装`react-native-vector-icons`
```bash
    yarn add react-native-vector-icons

    # npm
    npm i --save react-native-vector-icon
```
3. 关联原生库
```bash
    react-native link react-native-vector-icons
```

4. 使用
```jsx
    import {Button,SearchBar} from 'react-native-elements';

    class MyComponent extends Component{
        state = {
            keyword:'',
        }
        changeKeyword=(keyword)=>{
            this.setState({
                keyword
            })
        }
        render(){
            return <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.changeKeyword}
                    value={this.state.keyword}
                />
                <Button title="搜索"></Button>
            </View>
        }
    }
```
>PS： android中如无法看到小图标，需要在`android/app/build.gradle`中添加字体图标`apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`

## 打包
* android APK
    1. 生成一个签名密钥
    ```bash
        keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    ```
    >以上命令会再当前目录生成一个`my-release-key.keystore`密钥库文件，请记得妥善地保管好你的密钥库文件
    2. 设置 gradle 变量
        * 把`my-release-key.keystore`文件放到你工程中的`android/app`文件夹下
        * 编译`/android/gradle.properties`文件，添加以下代码：
        ```js
            MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
            MYAPP_RELEASE_KEY_ALIAS=my-key-alias
            MYAPP_RELEASE_STORE_PASSWORD=*****
            MYAPP_RELEASE_KEY_PASSWORD=*****
        ```
    3. 把签名配置加入到项目的 gradle 配置中
    >编辑你项目目录下的`android/app/build.gradle`，添加如下的签名配置：
    ```config
        android {
            ...
            defaultConfig { ... }
            signingConfigs {
                release {
                    if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                        storeFile file(MYAPP_RELEASE_STORE_FILE)
                        storePassword MYAPP_RELEASE_STORE_PASSWORD
                        keyAlias MYAPP_RELEASE_KEY_ALIAS
                        keyPassword MYAPP_RELEASE_KEY_PASSWORD
                    }
                }
            }
            buildTypes {
                release {
                    ...
                    signingConfig signingConfigs.release
                }
            }
        }
    ```
    4. 打包
    ```bash
        # 进入android目录
        ./gradlew assembleRelease
    ```
