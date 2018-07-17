# 文档

更多的组合样式请查看 [label.react](https://github.com/onface/label.react)

## basic

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="basic-demo" ></div>',
    source: './basic.demo.js',
    open: true,
    side: true,
}
````

## size


````code
{
    title: '基础使用',
    desc: '**通过改变包裹的div的`font-size`来自适应大小。<br/>建议font-size不要小于默认尺寸，因为浏览器对于含小数值px(像素)解析有差异。**',
    html: '<div id="size-demo" ></div>',
    source: './size.demo.js',
    open: true,
    side: true,
}
````

## themes

	
1. 也可以参考`themes.demo.less`仅加部分代码修改 

````code
{
    title: 'themes',
    desc: '',
    source: 'themes.demo.less',
    open: false,
    run:false
}
````

````code
{
    title: '多次封装',
    desc: '此处另加了prefixClassName属性 是在示例中防止与组件自带样式重复覆盖',
    html: '<div id="themes-demo" ></div>',
    source: './themes.demo.js',
    open: true,
    side: true,
}
````

2. 也可以全部复制样式文件后做修改 [参考下面例子 prefixClassName](#prefixClassName)         
复制 [lib/less/](/lib/less/) 下的文件     
添加 [lib/less/settings.less](/lib/less/settings.less) 部分或者其他代码。配置 `color`。       
在 [lib/less/themes.less](/lib/less/themes.less) 文件中添加自定义主题 例:`/* xxx  (start) */` **`demo code`** `/* xxx  (end) */`    
<br/><br/><br/><br/><br/><br/>



## else

> 内置themes `partial` `exist` 给[其他组件](https://onface.github.io/tree.react/)预用

````code
{
    title: '`themes-partial` `themes-exist`',
    desc: '',
    html: '<div id="else-demo" ></div>',
    source: './else.demo.js',
    open: true,
    side: true,
}
````


## prefixClassName

复制 [lib/index.less](./lib/index.less) 和 [lib/less/](./lib/less) 下的文件，修改 `border-radius` 部分或者其他代码。配置 `prefixClassName`。
[参考上面例子](#themes)


````code
{
    title: '多次封装',
    desc: '',
    html: '<div id="pcls-demo" ></div>',
    source: './pcls.demo.js',
    open: true,
    side: true,
}
````

