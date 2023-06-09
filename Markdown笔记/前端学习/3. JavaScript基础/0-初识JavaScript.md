## 一、初识JavaScript

### 1. JavaScript历史

- 布兰登·艾奇
- 1995年利用10天完成JavaScript设计
- 网景公司最初命名为LiveScript，后来在于Sun合作之后将其改名为JavaScript

### 2. JavaScript是什么

- JavaScript是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script是脚本的意思）
- 脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来进行解释并执行
- 现在也可以基于Node.js技术进行服务器端编程

### 3. JavaScript的作用

- 表单动态校验（密码强度检测）==（JS产生最初的目的）==
- 网页特效
- 服务端开发（Node.js）
- 桌面程序（Electron）
- App（Cordova）
- 控制硬件-物联网（Ruff）
- 游戏开发（cocos2d-js）

### 4. HTML/CSS/JS的关系

#### 4.1 HTML/CSS标记语言--描述类语言

- HTML决定网页结构和内容（决定看到什么），相当于人的身体
- CSS决定网页呈现给用户的模样（决定好不好看），相当于给人穿衣服、化妆

#### 4.2 JS脚本语言--编程类语言

- 实现业务逻辑和页面控制（决定功能），相当于人的各种动作

### 5. 浏览器执行JS简介

- ==渲染引擎==：用来解析HTML与CSS，俗称内核，比如Chrome浏览器的blink，老版本的webkit

- ==JS引擎==：也称为JS解释器，用来读取网页中的JavaScript代码，对其处理后运行，比如Chrome浏览器的V8

==浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎（解释器）来执行JS代码，JS引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以JavaScript语言归为脚本语言，会逐行解释执行。==

### 6. JS的组成

#### 6.1 ECMAScript

==ECMAScript==是由ECMA国际进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者ECMAScript语言的实现和扩展。

==ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。==

#### 6.2 DOM——文档对象模型

==文档对象模型==（Document Object Model，简称DOM），是W3C组织推荐的可扩展标记语言的==标准编程接口==。通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。

#### 6.3 BOM——浏览器对象模型

==BOM==（Browser Object Model，简称BOM），是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

### 7. JS初体验

JS有三种书写位置，分别为行内、内嵌和外部。

#### 7.1 行内式JS

```js
<input type="button" value="点我试试" onclick="alert('Hello World')">
```

- 可以将单行或少量JS代码写在HTML标签的事件属性中（以on开头的属性），如：onclick
- 注意单双引号的使用：在==HTML==中推荐使用==双引号==，==JS==中推荐使用==单引号==
- 可读性差，在HTML中编写JS大量代码时，不方便阅读
- 引号易错，引号多层嵌套匹配时，非常容易弄混
- 特殊情况下使用

#### 7.2 内嵌JS

```js
	<!-- 2. 内嵌式的js -->
    <script>
        alert('Hello World');
    </script>
```

- 可以将多行JS代码写到`<script>`标签中
- 内嵌JS是学习时常用的方式

#### 7.3 外部JS

```js
<script src="my.js"></script>
```

- 用于HTML页面结构化，把大段JS代码独立到HTML页面之外，既美观，也方便文件级别的复用
- 引用外部JS文件的script标签中间不可以写代码
- 适合于JS代码量比较大的情况

### 8. JavaScript注释

```js
// 1. 单行注释  ctrl + /
/* 2. 多行注释  默认的快捷键 shift + alt + a
   2. 多行注释  vscode中修改多行注释的快捷键：ctrl + shift + /
*/
```

## 二、JavaScript输入输出语句

|       方法       |              说明              |  归属  |
| :--------------: | :----------------------------: | :----: |
|    alert(msg)    |        浏览器弹出警示框        | 浏览器 |
| console.log(msg) |    浏览器控制台打印输出信息    | 浏览器 |
|   prompt(info)   | 浏览器弹出输入框，用户可以输入 | 浏览器 |

```js
		// 这是一个输入框
        prompt('请输入您的年龄');
        // alert  弹出警示框  输出的  展示给用户的
        alert('计算的结果是');
        // console 控制台输出 给程序员测试用的
        console.log('我是程序员能看到的');
```

## 三、变量

### 1. 变量概述

#### 1.1 什么是变量

变量：用于存放数据的容器，我们通过变量名获取数据，甚至修改数据。

#### 1.2 变量在内存中的存储

本质：变量是程序在内存中申请的一块用来存放数据的空间。

### 2. 变量的使用

#### 2.1 声明变量

```js
// 声明变量
var age; //声明一个名为age的变量
```

var是一个JS关键字，用来声明变量（variable变量的意思）。使用该关键字声明变量后，计算机会自动为变量分配内存空间。

age是变量名，通过变量名来访问内存中分配的空间。

#### 2.2 赋值

```js
age = 10; //给age这个变量赋值为10
```

#### 2.3 变量的初始化

```js
var age = 10; //声明变量同时赋值为10
```

声明一个变量并赋值，称之为==变量的初始化==。

### 3. 变量语法扩展

#### 3.1 更新变量

一个变量被重新赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

#### 3.2 同时声明多个变量

同时声明多个变量时，只需要写一个var，多个变量名之间使用英文逗号隔开。

```js
var age = 10, name = 'hs', sez = 2;
```

#### 3.3 声明变量特殊情况

|             情况             |          说明          |   结果    |
| :--------------------------: | :--------------------: | :-------: |
| `var age;console.log(age);`  |      只声明不赋值      | undefined |
|     `console.log(age);`      | 不声明不赋值，直接使用 |   报错    |
| `age = 10;console.log(age);` |      不声明只赋值      |    10     |

### 4. 变量命名规范

由字母(A-Z a-z)、数字(0-9)、下划线(_)、美元符号$组成，如：usrAge, num01, _name

严格区分大小写，`var app;`和`var App;`是两个变量

不能以数字开头，`18age`是错误的

不能是关键字、保留字，例如：`var,for,while`

变量名必须有意义，MMD BBD   nl→age

遵守驼峰命名法，首字母小写，后面单词的首字母需要大写，`myFirstName`



