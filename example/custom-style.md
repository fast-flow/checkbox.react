# custom style

If you want to completely customize the style,you need a reference [lib/index.css](../lib/index.css),and using the props.className props.prefixClassName.

<div id="example__custom-style_node" class="fast-flow-demo">loading...</div>

````css
html .m-checkbox--s {
    width:14px;
    height:14px;
    margin-right: 2px;
    margin-right: 2px;
}
html .m-checkbox--s .r-checkbox-mark:before {
        width: 7px;
        height: 3px;
        position: absolute;
        top:2.45px;
        left:2px;
}

html .m-checkbox--m {
    width:16px;
    height:16px;
    margin-right: 3px;
    margin-right: 3px;
}
html .m-checkbox--m .r-checkbox-mark:before {
        width: 8px;
        height: 4px;
        position: absolute;
        top:2.8px;
        left:2px;
}

html .m-checkbox--l {
    width:20px;
    height:20px;
    margin-right: 4px;
    margin-right: 4px;
}
html .m-checkbox--l .r-checkbox-mark:before {
    width: 10px;
    height: 4px;
    position: absolute;
    top:4.45px;
    left:3px;
}
````

<!--MR-R {
    type: "pre",
    file: './custom-style.demo.js'
} -->
[./custom-style.demo.js](./custom-style.demo.js)
