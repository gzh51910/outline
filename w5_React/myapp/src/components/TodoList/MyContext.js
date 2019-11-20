import React from 'react';

// 1.定义Context与默认值
// default为默认值，当父组件不提供Provider时，使用默认值
const MyContext = React.createContext('default');

export default MyContext;