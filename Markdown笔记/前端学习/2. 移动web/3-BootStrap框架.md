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

- `table` : 基本类名, 初始化表格默认样式
- `table-bordered` : 边框线
- `table-striped` : 隔行变色
- `table-hover` : 鼠标悬停效果
- `table-condensed`：表格更加紧凑

响应式表格

- `table-responsive` : 表格宽溢出滚动
- ==将任何` .table `元素包裹在` .table-responsive` 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。==

#### 4. 2 美化内容类：按钮

- 基础样式 :  `btn`
- 附加样式
  - `btn-primary`
  - `btn-secondary`
  - `btn-success`
  - `btn-danger`
  - `btn-warning`
  - `btn-info`
  - `btn-light`
  - `btn-dark`
  - `btn-link`

- 禁止按钮上的文字换行 : `text-nowrap`
- 设置按钮为块元素 : `btn-block`
- 设置按钮尺寸 : `btn-lg`;` btn-sm`; `btn-xs`
- 按钮禁用
  - 通过 `disabled`属性 （==真正==的禁用元素）
  - 通过 `.disable`样式（==样式==上禁用）==`<a>`不支持disabled属性==

#### 4. 3 布局类：表单

- `form-control` : 设置表单元素`input, select, textarea`的样式
- `checkbox` 和 `radio` : 设置复选框和单选框的样式
- `form-inline` : 设置表单元素水平排列
- `disabled` : 设置表单禁用状态样式
- `input-lg`, `input-sm`, `input-xs` : 设置表单元素的大小
- `readonly` : 为输入框设置`readonly`属性可以禁止用户修改输入框中的内容为只读状态。

#### 4. 4 美化内容类：图片

- `img-responsive` : 图片自适应
- `img-rounded` : 图片设置圆角
- `img-circle` : 图片设置正圆
- `img-thumbnail` : 图片添加边框线

#### 4. 5 布局类：辅助类

- `pull-right` : 强制元素右浮动
- `pull-left` : 强制元素左浮动
- `clearfix` : 清除浮动float元素的影响
- `text-left` : 文本左对齐
- `text-right` : 文本右对齐
- `text-center` : 文本居中对齐
- `center-block` : 块元素居中

### 5. 组件

使用BootStrap组件快速布局网页

- 组件：BootStrap提供的常见功能，包含了HTML结构和CSS样式。
- 使用方法：引入BootStrap样式，复制结构，修改内容

导航Navigation

- `.nav`：基本样式
- `.nav-tabs` ：标签式的导航菜单
- `.nav-pills`：胶囊式的导航菜单
- `.nav-pills .nav-stacked`：垂直的胶囊式导航菜单
- `.breadcrumb`：面包屑导航

分页导航

- 默认的分页
  - 给一个无序列表添加`class="pagination"`
  - 给任意一个li添加`class="active"`（表示选中这一页）
- 翻页
  - 给一个无序列表添加`class="pager"`

### 6. 插件

插件的使用步骤

- 引入BootStrap样式
- 引入js文件：jQuery.js + BootStrap.min.js

下拉菜单

- `.dropdown`类用来指定一个下拉菜单。
  - 使用一个按钮或链接来打开下拉菜单，按钮或链接需要添加` .dropdown-toggle` 和`data-toggle="dropdown"` 属性。
  - `<div> `元素上添加` .dropdown-menu `类来设置实现下拉菜单，然后在下拉菜单的选项中添加 `.dropdown-item `类。

下拉菜单中的分割线

- 下拉菜单中的分割线：`.dropdown-divider`
- 下拉菜单中的标题：`.dropdown-header`
- 下拉菜单中的可用项与禁用项：`.active`（激活状态）和`.disabled`（禁用状态）
- 对齐方式
  - `.dropdown-menu-left `   左对齐，默认
  - `.dropdown-menu-right`      右对齐
- 下拉菜单弹出方向设置
  - 默认向下：`dropdown`
  - 向右：在div元素上添加"`dropright`"类
  - 向上：在div元素上添加"`dropup`"类
  - 向左：在div元素上添加"`dropleft`"类

- 下拉菜单设置文本：`.dropdown-item-text` 仅仅只是文本，只能看不能点击

### 7. 模态框

模态框（Modal）是覆盖在原本窗体上的子窗体。通常，目的是显示来自一个单独的源的内容，可以在不离开原本窗体的情况下有一些互动。子窗体可提供信息交互等。

- 创建模态框

  ```html
  <!-- 按钮：用于打开模态框 -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    打开模态框
  </button>
   
  <!-- 模态框 -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
   
        <!-- 模态框头部 -->
        <div class="modal-header">
          <h4 class="modal-title">模态框头部</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
   
        <!-- 模态框主体 -->
        <div class="modal-body">
          模态框内容..
        </div>
   
        <!-- 模态框底部 -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        </div>
   
      </div>
    </div>
  </div>
  ```

- 模态框提供了两个可选尺寸，通过为
  ` .modal-dialog`增加一个样式调整类实现。

  ```html
  <div class="modal-dialog modal-sm">
  <div class="modal-dialog modal-lg">
  ```

### 8. 模态框用法

通过`data`属性或JavaScript调用模态框插件，可以根据需要==动态展示==隐藏的内容。模态框弹出时还会为`<body>`元素添加`.modal-open`类，从而==覆盖==页面默认的滚动行为，并且还会自动生成一个==`.modal-backdrop`==元素用于提供一个可点击的区域，点击此区域就即可关闭模态框。

- 通过 `data` 属性

  - 不需写 JavaScript 代码也可激活模态框。通过在一个起控制器作用的元素（例如：按钮）上添加 `data-toggle="modal"` 属性，或者 `data-target="#foo"` 属性，再或者 `href="#foo"` 属性，用于指向被控制的模态框。

    ```html
    <button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>
    ```

- 通过 JavaScript 调用

  - 只需一行 JavaScript 代码，即可通过元素的 id `myModal` 调用模态框：

    ```js
    $('#myModal').modal(options)
    ```

实例

```js
$('#AlertBox').on('shown.bs.modal', function (e) {
   $(".modal-backdrop:last").addClass("iframeZindexHight");
})
$('#confirmModal').on('shown.bs.modal', function (e) {
    $(".modal-backdrop:last").addClass("iframeZindexHight");
})
$('#SessionLogOut').on('shown.bs.modal', function (e) {
    $(".modal-backdrop:last").addClass("iframeZindexHight");
})
```

解析：这段代码是通过监听模态框的“shown.bs.modal”事件，在模态框显示出来之后，给最后一个.modal-backdrop元素添加一个名为“iframeZindexHight”的类，目的是调整模态框的背景遮罩的层级，让它可以在其他元素上方显示，使得这个遮罩区域可以点击，并且点击后会关闭模态框。

## 三、实战演练