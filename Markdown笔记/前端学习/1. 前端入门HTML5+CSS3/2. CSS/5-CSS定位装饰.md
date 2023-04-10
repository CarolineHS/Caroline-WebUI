# CSS定位装饰

## 一、定位

### 1. 定位的基本介绍

#### 1）网页常见布局方式

- ##### 标准流

  - 块级元素独占一行---垂直布局

  - 行内元素/行内块元素一行显示多个---水平布局

- ##### 浮动

  - 可以让原本垂直布局的==块级元素变成水平布局==

- ##### 定位

  - 可以让元素自由的摆放在网页的任意位置

  - 一般用于==盒子之间的层叠情况==

### 2. 定位的基本使用

#### 1）设置定位方式

- 属性名：position

- 常见属性值

  | 定位方式 |   属性值   |
  | :------: | :--------: |
  | 静态定位 |  `static`  |
  | 相对定位 | `relative` |
  | 绝对定位 | `absolute` |
  | 固定定位 |  `fixed`   |

#### 2）设置偏移值

- 偏移值设置分为两个方向，水平和垂直方向各选一个使用即可

- 选取的原则一般是就近原则（离哪边近用哪个）

  | 方向 |  属性名  | 属性值  |      含义      |
  | :--: | :------: | :-----: | :------------: |
  | 水平 |  `left`  | 数字+px | 距离左边的距离 |
  | 水平 | `right`  | 数字+px | 距离右边的距离 |
  | 垂直 |  `top`   | 数字+px | 距离上边的距离 |
  | 垂直 | `bottom` | 数字+px | 距离下边的距离 |

### 3. 静态定位

- 介绍：静态定位是默认值，就是之前认识的标准流
- 代码：`position:static;`
- 注意点：
  - 静态定位就是之前标准流，不能通过方位属性进行移动
  - 之后说的定位不包括静态定位，一般特指后几种：相对、绝对、固定

```html
	<style>
        /* css书写: 1. 定位 / 浮动 / display ; 2. 盒子模型; 3. 文字属性 */
        .box {
            /* 静态定位, 默认值, 标准流 */
            position: static;
            left: 100px;
            top: 200px;

            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
```

### 4. 相对定位

- 介绍：自恋型定位，相对于自己之前的位置进行移动
- 代码：`position:relative;`
- 特点：
  1. 需要配合方位属性实现移动
  2. 相对于自己原来位置进行移动
  3. 在页面中占位置 → 没有脱标

- 应用场景：
  1. 配合绝对定位组cp（子绝父相）
  2. 用于小范围的移动

```html
	<style>
        /* 如果left和right都有，以left为准；top和bottom都有，以top为准 */
        /* 水平和垂直只需要写一个即可 */
        /* css书写: 1. 定位 / 浮动 / display ; 2. 盒子模型; 3. 文字属性 */
        .box {
            position: relative;
            left: 100px;
            top: 200px;

            right: 200px;

            bottom: 400px;

            /* 
                相对定位
                1.占有原来的位置--没有脱标
                2.仍然具备原有的显示模式特点
                3.改变位置参照自己原来的位置
            */

            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
```

### 5. 绝对定位

- 介绍：拼爹型定位，相对于非静态定位的父元素进行定位移动
- 代码：`position:absolute;`
- 特点：
  1. 需要配合方位属性实现移动
  2. 默认相对于浏览器可视区域进行移动
  3. 在页面中不占位置 → 已经脱标

- 应用场景：
  1. 配合绝对定位组CP（子绝父相）

```html
    <style>
        /* css书写: 1. 定位 / 浮动 / display ; 2. 盒子模型; 3. 文字属性 */
        .box {
            /* 绝对定位：
                先找已经定位的父级，如果有这样的父级就以这个父级为参照物进行定位
                有父级，但父级没有定位，以浏览器窗口为参照物进行定位
            */
            position: absolute;
            /* left: 50px; */
            left: 0;
            top: 0;
            /* 
                1.脱标，不占位置
                2.改变标签的显示模式特点：具备行内块的特点（在一行共存，宽高生效）
            */
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
```

### 6. 子绝父相

- 场景：让子元素相对于父元素进行自由移动
- 含义：
  1. 子元素：绝对定位
  2. 父元素：相对定位

- 子绝父相好处：
  1. 父元素是相对定位，则对网页布局影响最小

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>定位-绝对-父级定位</title>
    <style>
        .father {
            position: relative;

            width: 400px;
            height: 400px;
            background-color: pink;
        }

        .son {
            /* 静态，相对，绝对 */
            /* 父级相对定位，子级绝对定位 -- 子绝父相 */
            /* position: relative; */
            /* position: absolute; */
            /* right: 100px; */

            width: 300px;
            height: 300px;
            background-color: skyblue;
        }

        .sun {
            position: absolute;
            /* left: 20px;
            top: 30px; */
            right: 20px;
            bottom: 50px;

            width: 200px;
            height: 200px;
            background-color: green;
        }

        /* 绝对定位查找父级的方式：就近找定位的父级，
            如果逐层查找不到这样的父级，就以浏览器窗口为参照进行定位 */
    </style>
</head>
<body>
    <div class="father">
        <div class="son">
            <div class="sun"></div>
        </div>
    </div>
</body>
</html>
```

### 7. 绝对定位-居中

```html
	<style>
        .box {
            /* 1. 绝对定位的盒子不能使用左右margin auto居中 */
            position: absolute;
            /* 标准流定位居中 */
            /* margin: 0 auto; */
            /* left：50%，整个盒子移动到浏览器中间偏右的位置 */
            left: 50%;
            /* 把盒子向左侧移动，自己宽度的一半 */
            /* margin-left: -200px; */

            top: 50%;
            /* margin-top: -150px; */

            /* 位移：自己宽度高度的一半 */
            transform: translate(-50%, -50%);

            width: 400px;
            height: 300px;
            background-color: pink;
        }
    </style>
```

### 8. 固定定位

- 介绍：死心眼型定位，相对于浏览器进行定位移动
- 代码：`position:fixed;`
- 特点：
  1. 需要配合方位属性实现移动
  2. 相对于浏览器可视区域进行移动
  3. 在页面中不占位置 → 已经脱标

- 应用场景：
  1. 让盒子固定在屏幕中的某个位置

```html
    <style>
        /* css书写: 1. 定位 / 浮动 / display ; 2. 盒子模型; 3. 文字属性 */
        .box {
            /* 固定定位 */
            position: fixed;
            left: 0;
            top: 0;
            /* 
                1. 脱标-不占位置
                2. 改变位置参考浏览器窗口
                3. 具备行内块特点
            */
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        p {
            margin-left: 200px;
        }
    </style>
```

### 9. 元素的层级关系

- 不同布局方式元素的层级关系
  - 标准流  <  浮动  <  定位

- 不同定位之间的层级关系

  - 相对、绝对、固定默认层级相同

  - 此时HTML中写在下面的元素层级更高，会覆盖上面的元素

- `z-index`：数字；属性可以修改定位元素的层级

```html
		/* 
            默认情况下，定位的盒子后来者居上
            z-index：整数; 取值越大，显示顺序越靠上， z-index的默认值是0
            注意：z-index必须配合定位才生效
            
        */
```

## 二、装饰

### 1. 垂直对齐方式

- 基线：浏览器文字类型元素排版中存在用于对齐的基线（baseline）
- 文字对齐问题
  1. 场景：解决行内/行内块元素垂直对齐问题
  2. 问题：当图片和文字在一行中显示时，其实底部不是对齐的

- 属性名：`vertical-align`

- 属性值

  |   属性值   |      效果      |
  | :--------: | :------------: |
  | `baseline` | 默认，基线对齐 |
  |   `top`    |    顶部对齐    |
  |  `middle`  |    中部对齐    |
  |  `bottom`  |    底部对齐    |

- 浏览器遇到行内和行内块标签当做文字处理, 默认文字是按基线对象

### 2. 光标类型

- 场景：设置鼠标光标在元素上时显示的样式

- 属性名：`cursor`

- 常见属性值

  |  属性值   |             效果             |
  | :-------: | :--------------------------: |
  | `default` |      默认值，通常是箭头      |
  | `pointer` |  小手效果，提示用户可以点击  |
  |  `text`   | 工字型，提示用户可以选择文字 |
  |  `move`   |  十字光标，提示用户可以移动  |

```html
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* 手型 */
            cursor: pointer;
            /* 工字型，表示可以复制 */
            cursor: text;
            /* 十字光标，表示用户可以移动 */
            cursor: move;
        }
    </style>
```

### 3. 边框圆角

- 场景：让盒子四个角变得圆润，增加页面细节，提升用户体验
- 属性名：`border-radius`
- 常见取值：数字+px 、百分比
- 赋值规则：从左上角开始赋值，然后顺时针赋值，没有赋值的看对角！
- 边框圆角的常见应用:
  1. 画一个正圆：
     - 盒子必须是正方形
     - 设置边框圆角为盒子宽高的一半 → `border-radius:50%`
  2. 胶囊按钮：
     - 盒子要求是长方形
     - 设置 → `border-radius`：盒子高度的一半

```html
    /* 边框圆角-基本使用 */
	<style>
        .box {
            margin: 50px auto;
            width: 200px;
            height: 200px;
            background-color: pink;
            /* 一个值：表示4个角是相同的 */
            border-radius: 10px;
            /* 4值：顺时针 */
            border-radius: 10px 20px 30px 40px;
            /* 从左上角开始赋值，然后顺时针赋值，没有赋值的看对角 */
            border-radius: 10px 40px 80px;

            border-radius: 10px 80px;
        }
    </style>
```

### 4. overflow溢出部分显示效果

- 溢出部分：指的是盒子 内容部分 所超出盒子范围的区域

- 场景：控制内容溢出部分的显示效果，如：显示、隐藏、滚动条……

- 属性名：`overflow`

- 常见属性值：

  |  属性值   |                效果                |
  | :-------: | :--------------------------------: |
  | `visible` |        默认值，溢出部分可见        |
  | `hidden`  |            溢出部分隐藏            |
  | `scroll`  |     无论是否溢出，都显示滚动条     |
  |  `auto`   | 根据是否溢出，自动显示或隐藏滚动条 |

```html
    <style>
        .box {
            width: 300px;
            height: 300px;
            background-color: pink;
            /* 溢出隐藏 */
            overflow: hidden;
            /* 滚动：无论内容是否溢出都显示滚动条的位置 */
            overflow: scroll;
            /* 根据是否溢出，自动显示或隐藏滚动条 */
            overflow: auto;
        }
    </style>
```

### 5. 元素本身隐藏

- 场景：让某元素本身在屏幕中不可见。如：鼠标:hover之后元素隐藏
- 常见属性：
  1. ==`visibility：hidden`==
  2. ==`display：none`==
- 区别：
  1. ==`visibility：hidden `==隐藏元素本身，并且在网页中==占位置==
  2. ==`display：none`==隐藏元素本身，并且在网页中==不占位置==
- 注意点：
  - 开发中经常会通过 display属性完成元素的显示隐藏切换
  - `display:none;`（隐藏）、 `display:block;`（显示）

## 三、选择器拓展

### 1. 元素整体透明度

- 场景：让某元素整体（包括内容）一起变透明

- 属性名：`opacity`

- 属性值：0~1之间的数字

  - 1：表示完全不透明

  - 0：表示完全透明

- `opacity`会让元素整体透明，包括里面的内容，如：文字、子元素等



2022/9/3 Caroline finish