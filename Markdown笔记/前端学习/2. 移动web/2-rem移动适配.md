## 一、rem

### 1. rem

能够使用rem单位设置网页元素的尺寸

- 网页效果：屏幕宽度不同，网页元素尺寸不同（等比缩放）

- px是绝对单位，百分比布局特点宽度自适应，高度固定

- 适配方案：rem、vw/vh

rem单位

- 相对单位
- rem单位是相对于HTML标签的字号计算结果
- 1rem = 1 HTML字号大小

### 2. 媒体查询

媒体查询能够检测视口的宽度，然后编写差异化的CSS样式

```css
		@media (媒体特性) {
            选择器 {
                CSS属性
            }
        }
		@media (width:375px) {
            html {
                font-size: 40px;
            }
        }
```

目前的rem布局方案中，将网页等分成10份，HTML标签的字号为视口宽度的1/10

### 3. rem适配原理

- 确定设计稿对应的设备的HTML标签字号
- 查看==设计稿宽度==---确定参考==设备宽度==（视口宽度）---确定==基准根字号==（1/10视口宽度）
- rem单位的尺寸 = ==px单位数值/基准根字号==

### 3. flexible.js

使用flexible.js配合rem实现在==不同宽度==的设备中，网页元素尺寸==等比缩放==效果

- flexible.js是手淘开发的一个用来适配移动端的js框架
- 核心原理就是根据==不同的视口宽度==给网页中HTML根节点设置不同的font-size

## 二、less

### 1. 使用Less语法快速编译生成CSS代码

- Less是一个CSS预处理器，Less文件后缀是.less
- 扩充CSS语言，使CSS具备一定的逻辑性、计算能力
- ==注意：浏览器不识别less代码，目前阶段，网页要引入对应的CSS文件==

### 2. Easy Less：

- vscode插件
- 作用：less文件保存自动生成css文件

### 3. Less语法：

- 单行注释
  - 语法：==//注释内容==
  - 快捷键：`ctrl + /`
- 块注释
  - 语法：==/* 注释内容 */==
  - 快捷键：`shift + alt + A`
- 运算
  - 加、减、乘直接书写计算表达式
  - 除法需要添加==小括号==

### 4. Less嵌套生成后代选择器

```css
.父级选择器 {
    //父级样式
    .子级选择器 {
        //子级样式
    }
}

.father {
    width: 100px;
    .son {
        color: red;
    }
}
//生成.css文件
.father {
  width: 100px;
}
.father .son {
  color: red;
}
```

==注意：&不生成后代选择器，表示当前选择器，通常配合伪类或伪元素使用==

```css
.father {
    width: 100px;
    .son {
        color: red;
        &:hover {
            color: green;
        }
    }
    &:hover {
        color: orange;
    }
}
//生成.css文件
.father {
  width: 100px;
}
.father .son {
  color: red;
}
.father .son:hover {
  color: green;
}
.father:hover {
  color: orange;
}
```

### 5. Less变量设置属性值

变量：存储数据，方便使用和修改

语法：

- 定义变量：==@变量名：值；==
- 使用变量：==CSS属性：@变量名；==

### 6. Less导入

```css
// 如果是less文件，可以省略后缀.less
@import './01-体验less.less';
@import './02-注释';
```

### 7. Less导出

方法一：配置EasyLess插件， 实现所有Less有相同的导出路径

配置插件：设置---搜索EasyLess---在setting.json中编辑---添加代码`"out": "../css/"`

方法二：控制当前Less文件导出路径

Less文件第一行添加如下代码，注意文件夹名称后面添加/

```
// out: ./css/

// out: ./css/common.css
```

==禁止导出==

在Less文件第一行添加：`// out: false`

## 三、项目演练

