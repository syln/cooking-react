##基于cooking生成的React脚手架

###step 1 安装cooking命令行工具

```
npm install cooking-cli -g
```


###step 2

```
npm install
```

ps:推荐用cnpm

具体配置可参照cooking官方文档进行修改，文档地址：

http://cookingjs.github.io/zh-cn/index.html

基础配置是生成多页面，入口文件在app.json里面配置，build.js里面配置生成html，如无具体需求可以不用改动

如果要生成单页的应用，可参考官方文档修改。

基本的两个命令：

开发运行：

```
cooking watch -p
```

打包：

```
cooking build -p
```


### 开发目录说明

src --开发目录

​	+components 自定义组件

​	+pages 页面存放，文件夹名对应页面名字

​	+assets 静态资源文件，如公用的样式和字体文件以及图片

举个栗子：

```
pages
  + index
  	index.js  //实例化页面
    app.jsx   //页面主要逻辑
```
