# DOM-获取DOM元素、修改属性

## 一、Web API基本认知

### 1. 作用和分类

- 作用: 就是使用 JS 去操作 html 和浏览器

- 分类：==DOM== （文档对象模型）、==BOM==（浏览器对象模型）

### 2. 什么是DOM

- DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML文档交互的API

- DOM是浏览器提供的一套专门用来==操作网页内容==的功能

- DOM作用：开发网页内容特效和实现用户交互

### 3. DOM树

- 将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树
- 描述网页内容关系的名词
- 作用：文档树直观的体现了标签与标签之间的关系

### 4. DOM对象

- DOM对象：浏览器根据html标签生成的 JS对象(DOM对象)
  - 所有的标签属性都可以在这个对象上面找到
  - 修改这个对象的属性会自动映射到标签身上

- DOM的核心思想
  - 把网页内容当做对象来处理

- document 对象
  - 是 DOM 里提供的一个==对象==
  - 所以它提供的属性和方法都是==用来访问和操作网页内容的==
    - 例：document.write()
  - 网页所有内容都在document里面

## 二、获取DOM对象

### 1. 根据CSS选择器来获取DOM元素

#### 1.1 选择匹配的第一个元素

语法：

```js
document.querySelector('css选择器')
```

参数：包含一个或多个有效的CSS选择器字符串

返回值：CSS选择器匹配的第一个元素，一个HTML Element对象。如果没有匹配到，则返回null

#### 1.2 选择匹配的多个元素

语法：

```js
document.querySelectorAll('css选择器')
```

参数：包含一个或多个有效的CSS选择器字符串

返回值：CSS选择器匹配的NodeList对象集合

得到的是一个伪数组：

- 有长度有索引号的数组
- 但是没有 pop() push() 等数组方法
- 想要得到里面的每一个对象，则需要遍历（for）的方式获得。

==注意事项：哪怕只有一个元素，通过querySelectAll() 获取过来的也是一个伪数组，里面只有一个元素而已==

### 2. 其他获取DOM元素方法

```js
// 根据id获取一个元素
document.getElementById('nav')
// 根据标签获取一类元素 获取页面所有div
document.getElementByTagName('div')
// 根据类名获取元素 获取页面所有类名为w的
document.getElementByClassName('w')
```

## 三、设置/修改DOM元素内容

### 1. document.write()方法

- 只能将文本内容追加到`</body>`前面的位置
- 文本中包含的标签会被解析

### 2. 对象.innerText属性

- 将文本内容添加/更新到任意标签位置
- 文本中包含的标签==不会==被解析

### 3. 对象.innerHTML属性

- 将文本内容添加/更新到任意标签位置
- 文本中包含的标签==会==被解析

```js
        // 1. 获取标签（元素）
        let box = document.querySelector('div')
        // 2. 修改标签内容  box是对象  innerText是属性
        // 对象.属性 = 值   不识别标签
        box.innerText = '<strong>修改元素</strong>'
        // 3. innerHTML 解析标签
        box.innerHTML = '<strong>修改元素</strong>'
```

随机抽取的名字显示到指定的标签内部

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            display: inline-block;
            width: 150px;
            height: 30px;
            border: 2px solid hotpink;
            vertical-align: middle;
            text-align: center;
            line-height: 30px;
        }
    </style>
</head>
<body>
    抽中的选手：<div></div>
    <script>
        // 1. 获取元素
        let box = document.querySelector('div')
        // 2. 得到随机的名字
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let arr = ['小小','大大','霓裳','木兮','倾城','墨锦','桃花','茯苓','木槿','迷雾','仙柒','挽风','薰池','白昼','薰池','词曲','柚茶','予遥','薄年','文浅','拾心','淡忘','慕然','暮柔','千城','顾玖','星河','南尘','北宸','心音','安笙','落苑','不眠','余味','Nitia','執筆','遠客','慾朢','璎埖','Golven','Agonie','Renaitre','Farewell','Fickle']
        // 生成一个随机数
        let random = getRandom(0, arr.length - 1)
        // document.write(arr[random])
        // 3. 写入标签内部
        box.innerHTML = arr[random]

        arr.splice(random, 1)
    </script>
</body>
</html>
```

## 四、设置/修改DOM元素属性

### 1. 设置/修改元素常用属性

- 还可以通过 JS 设置/修改标签元素属性，比如通过 src更换图片
- 最常见的属性比如： href、title、src 等

```html
    <img src="./images/1.webp" alt="">
    <script>
        // 1. 获取元素
        let pic = document.querySelector('img')
        // 2. 修改元素属性
        pic.src = './images/2.webp'
        pic.title = '这是一张图片'
    </script>
```

刷新页面，随机显示图片

```html
    <img src="./images/1.webp" alt="">

    <script>
        // 1. 获取图片元素
        let pic = document.querySelector('img')
        // 2. 随机得到图片序号
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let num = getRandom(1, 6)
        // 3. 完成src属性赋值
        pic.src = `./images/${num}.webp`
    </script>
```

### 2. 设置/修改元素样式属性

还可以通过 JS 设置/修改标签元素的样式属性

- 比如通过 轮播图小圆点自动更换颜色样式

- 点击按钮可以滚动图片，这是移动的图片的位置 left 等等

#### 2.1 通过 style 属性操作CSS

语法：`对象.style.样式属性 = 值`

```js
        // 1. 获取元素
        let box = document.querySelector('div')
        // 2. 修改背景颜色
        box.style.backgroundColor = 'hotpink'
        box.style.width = '400px'
        box.style.marginTop = '100px'
```

修改样式由style属性引出

如果属性有-连接符，需要转换为小驼峰命名法

赋值的时候不要忘记CSS单位，如px

随机背景

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-image: url(./images/desktop_1.jpg);
        }
        
    </style>
</head>
<body>
    <script>
        // 随机函数
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // 随机的值1-10
        let num = getRandom(1, 10)
        // 修改背景图片
        document.body.style.backgroundImage = `url(./images/desktop_${num}.jpg)`
    </script>
</body>
</html>
```

#### 2.2 操作类名(className) 操作CSS

如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式。

```js
// active是一个css类名
元素.className = 'active'
```

> 注意：
>
> 1. 由于class是关键字, 所以使用className去代替
>
> 2. className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名

#### 2.3 通过 classList 操作类控制CSS

为了解决className容易覆盖以前的类名的问题，我们可以通过classList的方式追加和删除类名

```js
        // 追加一个类
        元素.classList.add('类名')
        // 删除一个类
        元素.classList.remove('类名')
        // 切换一个类
        元素.classList.toggle('类名')
```

### 3. 设置/修改表单元素属性

```js
        表单.value = '用户名'
        表单.type = 'password'
```

表单属性中添加就有效果，移除就没有效果，一律使用布尔值表示：如果为true代表添加了该属性，如果是false代表移除了该属性。

比如：disabled、checked、selected

## 五、定时器-间歇函数

### 1. 定时器函数介绍

网页中经常会需要一种功能：每隔一段时间需要自动执行一段代码，不需要我们手动触发。例如：网页中的倒计时。要实现这种需求，需要定时器函数

### 2. 定时器函数基本使用

#### 2. 1 开启定时器

```js
        function repeat() {
            console.log('间歇函数')
        }
        // 每隔一秒调用repeat函数
        setInterval(repeat, 1000)
```

#### 2. 2 关闭定时器

```js
        let 变量名 = setInterval(函数, 间隔时间)
        // 清除定时器
        clearInterval(变量名)
```

> 注意：
>
>1. 函数名字不需要加括号
>2. 定时器返回的是一个id数字

用户注册倒计时

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <textarea name="" id="" cols="30" rows="10">
        用户注册协议
        欢迎注册成为京东用户！在您注册过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体或下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）。
        【请您注意】如果您不同意以下协议全部或任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息，阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容，并表明您同意我们可以依据协议内容来处理您的个人信息，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方（详情查看）
    </textarea>
    <br>
    <button class="btn" disabled>我已经阅读用户协议(6)</button>
    <script>
        // 1. 获取元素button
        let btn = document.querySelector('.btn')
        // 2. 计算逻辑
        // 2.1 需要一个变量来计数
        let i = 6
        // 2.2 开启定时器 间歇函数
        let timer = setInterval(function(){
            i--
            btn.innerHTML = `我已经阅读用户协议(${i})`
            if (i === 0) {
                // 清除定时器
                clearInterval(timer)
                // 开启按钮
                btn.disabled = false
                // 更换文字
                btn.innerHTML = '我同意该协议'
            }
        }, 1000)
    </script>
</body>
</html>
```

## 六、综合案例

焦点图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QQ音乐轮播图</title>
    <style>
        .img-box {
            width: 700px;
            height: 320px;
            margin: 50px auto;
            background: #000;
            position: relative;
        }

        .img-box .tip {
            width: 700px;
            height: 53px;
            line-height: 53px;
            position: absolute;
            bottom: 0px;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 10;
        }

        .img-box .tip h3 {
            width: 82%;
            margin: 0;
            margin-right: 20px;
            padding-left: 20px;
            color: #98E404;
            font-size: 24px;
            float: left;
            font-weight: 500;
            font-family: "Microsoft Yahei", Tahoma, Geneva;
        }

        .img-box .tip a {
            width: 30px;
            height: 29px;
            display: block;
            float: left;
            margin-top: 12px;
            margin-right: 3px;
        }

        .img-box ul {
            position: absolute;
            bottom: 0;
            right: 30px;
            list-style: none;
            z-index: 99;
        }
    </style>
</head>
<body>
    <div class="img-box">
        <img class="pic" src="./images/b01.jpg" alt="">
        <div class="tip">
            <h3 class="text">挑战云歌单，欢迎你来</h3>
        </div>
    </div>

    <script>
         // 数据
         let data = [
            {
                imgSrc: 'images/b01.jpg',
                title: '挑战云歌单，欢迎你来'
            },
            {
                imgSrc: 'images/b02.jpg',
                title: '田园日记，上演上京记'
            },
            {
                imgSrc: 'images/b03.jpg',
                title: '甜蜜攻势再次回归'
            },
            {
                imgSrc: 'images/b04.jpg',
                title: '我为歌狂，生为歌王'
            },
            {
                imgSrc: 'images/b05.jpg',
                title: '年度校园主题活动'
            },
            {
                imgSrc: 'images/b06.jpg',
                title: '新歌发布，5月10号正式推出'
            },
            {
                imgSrc: 'images/b07.jpg',
                title: '动力火车来到西安'
            },
            {
                imgSrc: 'images/b08.jpg',
                title: '钢铁侠3，英雄镇东风'
            },
            {
                imgSrc: 'images/b09.jpg',
                title: '我用整颗心来等你'
            },
        ]

        // 1. 获取元素：图片和h3
        let pic = document.querySelector('.pic')
        let text = document.querySelector('.text')
        // i 记录图片的张数
        let i = 0
        // 2. 开启定时器
        setInterval(function(){
            i++
            // 修改图片的src属性
            pic.src = data[i].imgSrc
            // 修改文字内容
            text.innerHTML = data[i].title

            // 无缝连接，从头开始循环
            if (i === data.length - 1) {
                i = -1
            }
            // 三元表达式
            // i === 8 ? i = -1 : i
        }, 1000)
    </script>
</body>
</html>
```

Caroline Finish 2022/12/29