# 项目开发

* 原型图（草图）
* 团队项目：git
    * 项目初始化
        > 准备工作
    * 分支操作
        * 分支
            * master
            * dev
            * 私有分支
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