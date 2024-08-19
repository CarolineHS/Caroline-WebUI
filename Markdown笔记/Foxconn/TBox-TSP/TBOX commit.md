- 配置Git

  ```
  git config --global user.name "X2001612 何双"
  git config --global user.email "shuang.he@mail.foxconn.com"
  ```

- 克隆仓库到本地

  ```
  git clone https://fiscm-cns.myfiinet.com/scm/t99w497_00_w_wan_lte_cpe_tbox/fn_tsp_web.git
  ```

- `git add .`添加文件到git，添加指定的文件`git add <filename>`

- `git diff --cached`检查具体的提交内容

- `git commit`提交代码，打开编辑器，详细书写commit message

- `git push`推送到远程仓库

> #### 2023/12/08

```
Vehicle Control: Fix bug: 添加车辆控制优化方案

Trigger time: 点击控制按钮会向服务器发送两条控制指令，导致返回结果不是我们希望的。按钮状态不会及时且稳定的更新，按钮会跳转。

Why happen: 因为status接口会不停的请求服务器的返回数据更新到页面上，而我们的control指令发出后需要一段时间才能收到返回数据，所以status接口将服务器还未及时响应的返回数据更新到了页面上，导致控制按钮的结果不准确。

How to fix: 用户在控制车辆状态时，实现控制按钮点击状态改变只触发一次onSwitchChange事件，不再下发控制指令，同时清除加载车辆实时状态的定时器status_interval直到有返回值再开启，并且给重新开启定时器这个操作加一个7秒延时，确保控制按钮不会发生跳变。
```

```
Vehicle Control: Fix bug: Add vehicle control optimization solution.

Trigger time: Clicking the control button will send two control instructions to the server, causing the returned results to be undesirable. The button status will not be updated in a timely and stable manner, and the button will jump.

Why happen: Because the status interface will constantly request the server's return data to be updated on the page, and it takes a while to receive the return data after our control instruction is issued, so the status interface updates the return data that the server has not responded to in time to the page. Resulting in inaccurate results for control buttons.

How to fix: When the user controls the vehicle status, the onSwitchChange event is only triggered once when the control button clicks the status change, and no control instructions are issued. At the same time, the timer status_interval that loads the vehicle's real-time status is cleared and is not turned on until there is a return value, and the timer is restarted. Add a 7-second delay to the operation to ensure that the control button will not jump.
```

> #### 2023/12/18

```
Vehicle Display: Fix bug: 页面没对齐。

Why happen: 滑动页面时，左侧地图和右侧车辆控制img图片不在同一水平线上，地图会随着页面一起滚动，看起来好像显示不全，影响观感。

How to fix: 给包括car-init原始图片在内的所有图片的position属性都设置为absolute绝对定位，这样它们就是相当于最近的具有定位属性的父元素定位，也就是<div>这个标签，所以我们要给div标签也加上定位属性，设置它的position为relative相对定位，这样右侧车辆控制img图片就会跟着整个页面一起移动而不会影响到其他元素的布局。
```

```
Vehicle Display: Fix bug: Page misalignment.

Why happens: When sliding the page, the map on the left and the vehicle control img image on the right are not on the same horizontal line. The map will scroll along with the page, which seems to be incompletely displayed, affecting the look and feel.

How to fix: Set the position attribute of all images, including the original car-init image, to absolute positioning, so that they are equivalent to the positioning of the nearest parent element with positioning attributes, which is the <div> tag, so We need to add a positioning attribute to the div tag and set its position to relative positioning, so that the vehicle control img image on the right will move with the entire page without affecting the layout of other elements.
```

