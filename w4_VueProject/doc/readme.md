# 项目开发

* 原型图（草图）
* 团队项目：git
    * 项目初始化
        * 目录结果
        * 依赖：vue-router,vuex,axios,element-ui
        * 二次封装
        * 分支
    * 分支操作

        * 分支类型
            * master
            * dev
            * 私有分支
        * 分支命令
            * 查看分支：`git branch`
                > 注意当前分支特点
            * 创建分支: `git branch dev`
                > 基于当前版本的基础上创建分支
                * 创建分支并关联远程分支：`git branch dev origin/dev`
            * 切换分支：`git checkout dev`
            * 删除分支：`git branch -d laoxie`
            

        * 团队协作
            * 合并分支
                1. 把laoxie合并到dev: 
                    1. 切换到dev分支: `git checkout dev`
                    2. 合并：`git merge laoxie`
                2. 把dev推送到github： `git push origin dev`

            * 更新修改
                1. 拉取dev分支内容：`git pull origin dev`
                2. 合并到私有分支(luoluo)：
                    1. 切换到私有分支
                    2. 合并：`git merge dev`
* 优化打包文件
    * 按需加载
    * 路由懒加载
    