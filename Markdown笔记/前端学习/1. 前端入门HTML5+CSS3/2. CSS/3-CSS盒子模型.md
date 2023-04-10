# CSS盒子模型

## 一、CSS三大特性

### 1. 继承性 

### 2. 层叠性

### 3. 优先级

#### 1）优先级的介绍

- 特性：不同选择器具有不同的优先级，优先级高的选择器样式会覆盖优先级低选择器样式

- 优先级公式：继承 < 通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 <` !important`

- 注意点

  - `!important`写在属性值的后面，分号的前面

  - `!important`不能提升继承的优先级，只要是继承优先级最低

  - 实际开发中不建议使用`!important`

#### 2）权重叠加计算![img](https://api2.mubu.com/v3/document_image/73c06a54-3fa9-4fa5-bdfa-eaad6f93e2c7-16813133.jpg)

## 二、Chrome调试工具![img](https://api2.mubu.com/v3/document_image/f070d93a-600b-461b-b959-550a9a6d26d8-16813133.jpg)

## 三、PxCook的基本使用

## 四、盒子模型

### 1. 盒子模型的介绍

#### 1）盒子的概念

- 页面中的每一个标签，都可看做是一个‘==盒子==’，通过盒子的视角更方便的进行布局

- 浏览器在渲染（显示）网页时，会将网页中的元素看做是一个个的矩形区域，我们也形象的称之为盒子

#### 2）盒子模型

- CSS中规定每个盒子分别由：==内容区域（content）、内边距区域（padding）、边框区域（border）、外边距区域（margin）==构成，这就是==盒子模型==

### 2. 内容区域的宽度和高度

- 作用：利用width和height属性默认设置是盒子==内容区域==的大小

- 属性：width/height

- 常见取值：数字+==px==

### 3. 边框（border）

- 作用：给设置边框粗细、边框样式、边框颜色效果

- 单个属性：

  |   作用   |     属性名     |                 属性值                  |
  | :------: | :------------: | :-------------------------------------: |
  | 边框粗细 | `border-width` |                 数字+px                 |
  | 边框样式 | `border-style` | 实线`solid`、虚线`dashed`、点线`dotted` |
  | 边框颜色 | `border-color` |                颜色取值                 |

- 属性名：`border`（单方向设置边框：border-方位名词）

- 属性值：单个取值的连写，取值之间以空格隔开。如：`border:10px solid red;`不分先后顺序

- 快捷键：bd+tab

- ==`solid`：实线      `dashed`：虚线      `dotted`：点线==

### 4. 内边距（padding）

### 5. 外边距（margin）

### 6. 盒子模型自动内减

![img](https://api2.mubu.com/v3/document_image/6a012999-d507-414e-bffa-216dd060f2f5-16813133.jpg)

- ==`box-sizing:border-box;`==

### 7. 清除默认内外边距![img](https://api2.mubu.com/v3/document_image/2f9fda37-e41b-4a98-9968-0d828a6bb3c6-16813133.jpg)

### 8. 版心居中

==`margin:0 auto;`==

### 9. 去掉列表的符号

==`ul{list-style:none;}`==

### 10. 外边距折叠现象-1.合并现象

- 场景：==垂直布局==的==块级元素==，上下的`margin`会合并

- 结果：最终两者距离为`margin`的最大值

- 解决办法：避免就好
  - 只给其中一个盒子设置`margin`即可

### 11. 外边距折叠现象-2.塌陷现象

- 场景：==互相嵌套==的==块级元素==，子元素的==`margin-top`==会作用在父元素上

- 结果：导致父元素一起往下移动

- 解决办法：

  - 给父元素设置`border-top`或者`padding-top`（分隔父子元素的`margin-top`）

  - ==给父元素设置`overflow：hidden`==

  - 转换成行内块元素

  - 设置浮动



2022/8/24 Caroline finish