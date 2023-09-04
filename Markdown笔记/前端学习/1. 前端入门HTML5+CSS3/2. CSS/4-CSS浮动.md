# CSS浮动

## 一、结构伪类选择器

目标：能够使用==结构伪类选择器==在HTML中定位元素

1. 作用与优势

- 作用：根据元素在HTML中的结构关系查找元素
- 优势：减少对HTML中类的依赖，有利于保持代码整洁
- 场景：常用于查找某父级选择器中的子元素

2. 选择器

|         选择器          |                    说明                    |
| :---------------------: | :----------------------------------------: |
|    `E:first-child{}`    |  匹配上级元素中第一个子元素，并且是E元素   |
|    `E:last-child{}`     | 匹配上级元素中最后一个子元素，并且是E元素  |
|   `E:nth-child(n){}`    |   匹配上级元素中第n个子元素，并且是E元素   |
| `E:nth-last-child(n){}` | 匹配上级元素中倒数第n个子元素，并且是E元素 |

- n的注意点：

  1）n为：0、1、2、3、4、......

  2）通过n可以组成常见公式

  |      功能       |      公式       |
  | :-------------: | :-------------: |
  |      偶数       |    2n、even     |
  |      奇数       | 2n+1、2n-1、odd |
  |    找到前5个    |      -n+5       |
  | 找到从第5个往后 |       n+5       |

```html
	<style>
		/* 选中第一个 */
        li:first-child {
            background-color: green;
        }
        /* 最后一个 */
        li:last-child {
            background-color: green;
        }
        /* 任意一个 */
        li:nth-child(3) {
            background-color: green;
        }
        li:nth-last-child(4) {
            background-color: green;
        }
        
        /* 偶数 */
        li:nth-child(2n)
 
        /* 奇数 */
        li:nth-child(2n+1)
 
        /* 找到前5个 */
        li:nth-child(-n+5)
 
        /* 4的倍数 */
        li:nth-child(4n) {
            background-color: green;
        }
	</style>
```

## 二、伪元素

目标：能够使用伪元素在网页中创建内容

- 伪元素：一般页面中的非主体内容可以使用伪元素

- 区别：

  1. 元素：HTML设置的标签
  2. 伪元素：由CSS模拟出的标签效果

- 种类：

  |     伪元素     |            作用            |
  | :------------: | :------------------------: |
  |   `::before`   | 在元素的前面添加一个伪元素 |
  |   `::after`    | 在元素的最后添加一个伪元素 |
  | `first-letter` |      选择元素的首字母      |
  |  `first-line`  |       选择元素的首行       |
  |  `selection`   |    选择元素被选中的部分    |

- 注意点：

  1. 必须设置content属性才能生效
  2. 伪元素默认是行内元素
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>伪元素</title>
      <style>
          .father {
              width: 300px;
              height: 300px;
              background-color: green;
          }
  
          .father::before {
              /* 内容 */
              /* content属性必须添加，否则伪元素不生效 */
              /* content里的内容可以不添加，但属性必须得有 */
              content: "内容";
              color: green;
              width: 100px;
              height: 100px;
              background-color: blue;
  
              /* 默认是行内元素，宽高不生效 */
              display: block;
          }
  
          .father::after {
              content: "属性";
          }
      </style>
  </head>
  <body>
      <!-- 伪元素：通过CSS创建标签，装饰性的不重要的小图 -->
      <!-- 找父级，在这个父级里面创建子级标签 -->
      <div class="father">爱</div>
  </body>
  </html>
  ```

## 三、==标准流==（标签默认的排列方式）

- 又称==文档流==，是浏览器在渲染显示网页内容时默认采用的一套排版规则，规定了应该以何种方式排列元素

- 常见标准流排版规则：

  - 1.块级元素：从上往下，==垂直布局==，独占一行

  - 2.行内元素 或 行内块元素：从左往右，==水平布局==，空间不够自动折行

## 四、浮动

### 1. 作用

- 早期：图文环绕

- 现在：网页布局

### 2. 特点

- **浮动元素会脱离标准流（简称：脱标），在标准流中不占位置**
  - **相当于从地面飘到了空中**
- **浮动元素比标准流高半个级别，可以覆盖标准流中的元素**
- **浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右浮动**
- **浮动元素有特殊的显示效果**

  - **一行可以显示多个**

  - **可以设置宽高**
- **注意点：浮动的元素不能通过`text-align：center`或者`margin：0 auto`**

```html
	<style>
        /* 浮动的标签：顶对齐 */
        /* 浮动：在一行排列，宽高生效 -- 浮动后的标签具备行内块的特点 */
        .one {
            width: 100px;
            height: 100px;
            background-color: pink;
            float: left;
            margin-top: 50px;
        }

        .two {
            width: 200px;
            height: 200px;
            background-color: skyblue;
            float: left;
            /* 浮动的元素不能通过text-align：center或者margin：0 auto */
            /* 因为有浮动，不能生效 - 盒子无法水平居中 */
            margin: 0 auto;
        }

        .three {
            width: 300px;
            height: 300px;
            background-color: orange;
        }
    </style>
```

### 3. 综合案例-导航

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>导航</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .nav {
            margin: 50px auto;
            width: 640px;
            height: 50px;
            background-color: #ffc0cb;
        }

        ul {
            list-style: none;
        }

        .nav li {
            float: left;
        }

        .nav li a {
            /* 1. 浮动 / display */
            /* display: inline-block; */
            display: block;

            /* 2. 盒子模型 */
            width: 80px;
            height: 50px;
            /* background-color: green; */

            /* 3. 文字样式 */
            text-align: center;
            line-height: 50px;
            color: #fff;
            text-decoration: none;
        }

        .nav li a:hover {
            background-color: green;
        }
    </style>
</head>
<body>
    <!-- 导航 -->
    <div class="nav">
        <ul>
            <li><a href="#">新闻</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">新闻</a></li>
            <li><a href="#">新闻</a></li>
        </ul>
    </div>
</body>
</html>
```

## 五、清除浮动

### 1. 清除浮动的介绍

- 含义：==清除浮动带来的影响==
  - 影响：如果子元素浮动了，此时子元素不能撑开标准流的块级父元素

- 原因：子元素浮动后脱标---不占位置

- 目的：需要父元素有高度，从而不影响其他网页元素的布局

### 2. 清除浮动的方法

#### 1)直接设置父元素高度

- 优点：简单粗暴，方便

- 缺点：有些布局中不能固定父元素高度，如：新闻列表，京东推荐模块

#### 2)额外标签法

- 操作：1.在父元素内容的最后添加一个块级元素。2.给添加的块级元素设置`clear：both`

- 特点：缺点：会在页面中添加额外的标签，会让页面的html结构变得复杂

#### 3)单伪元素清除法

```html
		/* 单伪元素清清除浮动 和 额外标签法一样的原理 */
        .clearfix::after {
            content:'';
            /* 伪元素添加的标签是行内的，要求块 */
            display: block;
            clear: both;

            /* 为了兼容性 */
            height: 0;
            visibility:hidden ;
        }
```

#### 4)双伪元素清除法

```html
		/* 清除浮动 */
        .clearfix::before,
        .clearfix::after {
            content: '';
            display: table;
        }

        /* .clearfix::after 作用：解决外边距塌陷问题
            外边距塌陷：父子标签，都是块级，子级加margin会影响父级的位置
        */
        /* 真正清除浮动的标签 */
        .clearfix::after {
            clear: both;
        }
```

#### 5)给父元素设置==`overflow：hidden`==

- 操作：直接给父元素设置`overflow：hidden`

- 特点：优点：方便



2022/8/29 Caroline finish