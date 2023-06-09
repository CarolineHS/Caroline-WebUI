# CSS基础

## 一、CSS简介

美化网页、布局页面

### 1. CSS

- （层叠样式表Cascading Style Sheets）（CSS样式表或级联样式表）

- 主要用于设置HTML中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、边距等）以及版面的布局和外观显示样式。

### 2. 总结

- HTML主要做结构，显示元素内容

- CSS美化HTML，布局网页

- CSS最大价值：由HTML专注去做结构呈现，样式交给CSS，即结构（HTML）与样式（CSS）相分离。

### 3. CSS语法规范

选择器和声明块

- 选择器是用于指定CSS样式的HTML标签，花括号内是对该对象设置的具体样式

- 属性和属性值以“键值对”的形式出现

### 4. CSS代码风格

- 样式格式书写

  - 紧凑格式

  - 展开格式

- 样式大小写风格
  - 小写、特殊情况除外

- 样式空格风格

  - 属性值前面，冒号后面，保留一个空格

  - 选择器和大括号之间保留空格

## 二、CSS基础选择器

### 1. 作用

选择器的作用就是根据不同需求把不同的标签选出来

### 2. 基础选择器

#### 1）标签选择器

1. 结构：`标签名 { CSS属性：属性值；}`

2. 作用：通过标签名，找到页面中所有这类标签，设置样式

3. 注意点

  1. 标签选择器选择的是一类标签，而不是单独某一个。
  2. 标签选择器无论嵌套关系有多深，都能找到对应的标签。

4. 优点：能快速为页面中同类型的标签统一设置样式。

5. 缺点：不能设计差异化样式，只能选择全部的当前标签。

   ```html
   <style>
           /* 标签选择器：写上标签名 */
           p {
               color: green;
           }
           div {
               color: pink;
           }
   </style>
   ```

#### 2）类选择器

- 结构：`.类名 { CSS属性名：属性值；}`

- 作用：通过类名，找到页面中所有带这个类名的标签，设置样式

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>基础选择器之类选择器</title>
      <style>
          /* 类选择器口诀：样式点定义  结构类（class）调用  一个或多个  开发最常用 */
          .pink{
              color: pink;
          }
          .red {
              color: red;
          }
          .green {
              color: green;
          }
          .purple {
              color: purple;
          }
  
          .size {
              font-size: 66px;
          }
      </style>
  </head>
  <body>
      <ul>
          <li class="purple"><a href="#" class="pink">我穿我自己</a></li>
          <li class="green"><a href="#" class="red">为什么它永无止境</a></li>
          <li class="red"><a href="#" class="purple">团宠锦鲤三岁半</a></li>
          <li class="pink"><a href="#" class="green">女主对此感到厌烦</a></li>
      </ul>
      <div class="red">绿色</div>
      <div class="pink size">蓝色</div>
  </body>
  </html>
  ```

- 注意点

  1. 所有标签上都有class属性，class属性的属性值称为==类名==

  2. 类名可以由数字、字母、下划线、中划线组成，但不能以数字或者中划线开头

  3. 一个标签可以同时有多个类名，类名之间以空格隔开

  4. 类名可以重复，一个类选择器可以同时选中多个标签

#### 3）id选择器

- 结构：`# id 属性值 { CSS属性名：属性值；}`

- 作用：通过id属性值，找到页面中带有这个id属性值的标签，设置样式

- 注意点

  1. 所有标签上都有id属性

  2. id属性值类似于身份证号，在一个页面中是唯一的，不可重复的

  3.  一个标签上只能有一个id属性值

  4. 一个id选择器只能选中一个标签

#### 4）通配符选择器

- 结构：`* { CSS属性名：属性值;}`

- 作用：找到页面中所有的标签，设置样式

- 注意点
  1. 开发中使用极少，只会在极特殊情况下才会使用

### 3. 复合选择器

## 三、CSS字体和文本样式

能够使用字体和文本相关样式修改元素外观样式

### 1. 字体样式

#### 1)字体大小

`font-size`（谷歌浏览器默认文字大小是==16px==）

#### 2)字体粗细

`font-weight`（normal/bold，100-900纯整数）

#### 3)字体样式

`font-style`（是否倾斜，正常默认值：normal，倾斜：italic）

#### 4)字体类型

`font-family`

##### 常见取值

​	具体字体1，具体字体2，具体字体3，...，字体系列

- 具体字体：Microsoft YaHei、微软雅黑、黑体、宋体、楷体等

- 字体系列：无衬线字体（sans-serif）、衬线字体（serif）、等宽字体（monospace）等

##### 渲染规则

- 从左往右按照顺序查找，如果电脑中未安装该字体，则显示下一个字体

- 如果都不支持，此时会根据操作系统，显示最后字体系列的默认字体

##### 注意点

- 如果字体名称中存在多个单词，推荐使用引号包裹

- 最后一项==字体系列不需要引号包裹==

- 网页开发时，尽量使用系统常见自带字体，保证不同用户浏览网页都可以正确显示

##### 拓展-样式的层叠性

​	如果给一个标签设置了相同的属性，此时样式会重叠（覆盖），写在最下面的会生效

#### 5)字体类型

##### font相关属性连写

- 取值：`font：style weight size family；`

- 只能省略前两个，如果省略了相当于设置了默认值

- 注意点：如果需要同时设置单独和连写形式

  - 要么把单独的样式写在连写的下面

  - 要么把单独的样式写在连写的里面

### 2. 文本样式

#### 1)文本缩进：`text-indent`

- 取值：数字+px或数字+em（推荐：1em = 当前标签的font-size的大小）

#### 2)文本水平对齐方式：`text-align`

- 左对齐：`left`

- 居中对齐：`center`

- 右对齐：`right`

- 注意点：如果需要让文本水平居中，`text-align`属性给文本所在标签（文本的==父元素==）设置

#### 3)文本修饰：`text-decoration`

- 下划线（常用）：`underline`

- 删除线（不常用）：`line-through`

- 上划线（几乎不用）：`overline`

- 无装饰线（常用）：`none`

- 注意点：开发中会使用`text-decoration：none;`清除a标签默认的下划线

### 3. line-height行高

作用：控制一行的上下行间距

属性名：`line-height`

取值：数字+px或倍数（当前标签font-size的倍数）

应用

- 让==单行文本==垂直居中可以设置`line-height：文本父元素高度`

- 网页精准布局时，会设置`line-height：1` 可以取消上下间距

行高与font连写的注意点

- 如果同时设置了行高和font连写，注意覆盖问题

- `font:style weight size/line-height family;`

## 四、CSS的引入方式

### 1. 内嵌式  CSS写在style标签中

- style标签虽然可以写在页面任意位置，但是通常约定写在==head==标签中

- 作用范围：当前页面

- 使用场景：小案例

### 2. 外联式  CSS写在一个单独的.css文件中

- 需要通过link标签在网页中引入

- 作用范围：多个页面

- 使用场景：项目中

### 3. 行内式  CSS写在标签的style属性中

- 作用范围：当前标签

- 使用场景：配合js使用

## 五、Chrome调试工具

### F12/右键“检查”![img](https://api2.mubu.com/v3/document_image/ccb7da38-2a83-4d78-8010-846478831fb4-16813133.jpg)



2022/6/21 Caroline finish