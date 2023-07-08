### 启动
1、启动项目

```
cd client
pnpm i
pn dev:weapp
```


2、微信开发者工具 创建小程序
- 选择当前项目根目录，即readme.md 所处的位置
- 输入appid
- 选择微信云开发


3、云函数本地调试
```
cd cloud/functions/login
# 如果能正常退出，说明本地函数无问题
pnpm run local 
```

4、上传云函数
- 开发者工具，functions目录，右击，选择同步云函数列表
- login 目录，右击，选择上传并部署
