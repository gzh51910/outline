const path = require('path')
module.exports = function override(config, env) {
    // 修改配置
    // config.resolve.alias['@'] = path.join(__dirname,'./src/')
    // config.resolve.alias['@@'] = path.join(__dirname,'./src/components')
    // config.resolve.alias['~'] = path.join(__dirname,'./src/pages')
    Object.assign(config.resolve.alias,{
        '@':path.join(__dirname,'./src/'),
        '@@':path.join(__dirname,'./src/components'),
        '~' : path.join(__dirname,'./src/pages')
    });
    console.log('config',config)
    return config;
}