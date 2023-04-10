## 一、媒体查询

### 1. 基本语法

==根据设备宽度的变化，设置差异化样式==

#### 1. 1 开发常用写法，媒体特性常用写法：

- `max-width`
- `min-width`

```css
@media (媒体特性) {
	选择器 {
		样式
	}
}
```

#### 1. 2 书写顺序

- ==min-width（从小到大）==
- ==max-width（从大到小）==

#### 1. 3 完整写法（了解）

```css
@media 关键词 媒体类型 and (媒体特性) { CSS代码 }
// and
// only
// not
```

媒体类型：用来==区分设备类型==，如屏幕设备、打印设备等，其中手机、电脑、平板都属于屏幕设备。

|  类型名称  |   值   |          描述           |
| :--------: | :----: | :---------------------: |
|    屏幕    | screen |      带屏幕的设备       |
|  打印预览  | print  |      打印预览模式       |
|   阅读器   | speech |      屏幕阅读模式       |
| 不区分类型 |  all   | 默认值，包括以上3种情形 |

媒体特性：用来==描述媒体类型的具体特征==，如当前屏幕的宽高、分辨率、横屏或竖屏等。

|      特性名称      |           属性            |                 值                  |
| :----------------: | :-----------------------: | :---------------------------------: |
|    视口的宽和高    |       width、height       |                数值                 |
| ==视口最大宽和高== | ==max-width==、max-height |                数值                 |
|   视口最小宽或高   | ==min-width==、min-height |                数值                 |
|      屏幕方向      |        orientation        | portrait：竖屏<br />landscape：横屏 |

#### 1. 4 外链式CSS引入

```css
<link rel="stylesheet" media="逻辑符 媒体类型 and (媒体特性)" href="xx.css">
```

电商站响应式的原则是隐藏内容

```css
/* 如果检测到视口宽度小于768px，认为是手机端，将left隐藏 */
        @media (max-width: 768px) {
            .left {
                display: none;
            }
        }
```

## 二、BootStrap框架

### 1. 了解BootStrap

UI框架概念：将常见效果进行统一封装后形成的一套代码，例如：BootStrap

作用：基于框架开发，效率高，稳定性高

目标：使用==BootStrap==框架快速开发==响应式==网页

- Bootstrap 是由 Twitter 公司开发维护的==前端 UI 框架==，它提供了大量==编写好的 CSS 样式==，允许开发者结合一定==HTML 结构及JavaScript==，快速编写功能完善的网页及常见交互效果。
- 中文官网: https://www.bootcss.com/

### 2. 使用步骤

- 引入：BootStrap提供的CSS代码
  - `<link rel="stylesheet" href="./bootstrap-3.4.1-dist/css/bootstrap.min.css">`
- 调用类：使用BootStrap提供的样式
  - `container`：响应式布局版心类

### 3. 栅格系统

使用BootStrap栅格系统布局响应式网页

- 栅格化是指将整个网页的宽度分成若干等份

- BootStrap默认将网页分成12等份

|          |  超小屏幕  |   小屏幕   |  中等屏幕  |   大屏幕   |
| :------: | :--------: | :--------: | :--------: | :--------: |
| 响应断点 | `< 768px`  | `>= 768px` | `>=992px`  | `>=1200px` |
|   别名   |    `xs`    |    `sm`    |    `md`    |    `lg`    |
| 容器宽度 |    100%    |   750px    |   970px    |   1170px   |
|  类前缀  | `col-xs-*` | `col-sm-*` | `col-md-*` | `col-lg-*` |
|   列数   |     12     |     12     |     12     |     12     |
|  列间隙  |    30px    |    30px    |    30px    |    30px    |

- ==.container==是BootStrap中专门提供的类名，所有应用该类名的盒子，默认已被==指定宽度且居中==
- ==.container-fluid==也是BootStrap中专门提供的类名，所有应用该类名的盒子，==宽度均为100%==
- 分别使用.row类名和.col类名定义栅格布局的行和列

注意：

1. ==container类自带间距15px==
2. ==row类自带间距-15px==

```html
    <!-- 版心样式:自带左右各15px的padding -->
    <div class="container">1</div>

    <!-- row类的作用是抵消container类的15px的内边距，row有-15px的外边距 -->
    <div class="container">
        <div class="row">2</div>
    </div>

    <!-- 宽度100%:自带左右各15px的padding -->
    <div class="container-fluid">3</div>
```

### 4. 全局样式

掌握BootStrap手册用法，使用全局CSS样式美化标签

BootStrap预定义了大量类用来美化页面，掌握手册的查找方法是学习全局样式的重点。

网站首页 → BootStrap3中文文档 → 全局CSS样式 → 按分类导航查找目标类

#### 4. 1 布局类：表格

#### 4. 2 美化内容类：按钮

#### 4. 3 布局类：表单

#### 4. 4 美化内容类：图片

#### 4. 5 布局类：辅助类

#### 4. 6 布局类：响应式工具（不同屏幕尺寸隐藏或显示页面内容）

### 5. 组件

使用BootStrap组件快速布局网页

- 组件：BootStrap提供的常见功能，包含了HTML结构和CSS样式。
- 使用方法：引入BootStrap样式，复制结构，修改内容

### 6. 插件



## 三、实战演练