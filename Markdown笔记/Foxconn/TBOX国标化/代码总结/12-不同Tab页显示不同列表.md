> ### 不同的Tab页显示不同类型的软件信息列表
>

1. ==增加`v-model`到`Tabs`组件：==这样可以追踪当前激活的Tab。

2. ==更新分页组件的绑定：==

```html
<Tabs type="card" v-model="activeTab">
    <TabPane label="模组" name="module">
        <div>
            <Table :loading="listLoading" :columns="columnsList" :data="moduleData" border disabled-hover></Table>
        </div>
        <div class="margin-top-15" style="text-align: center">
            <Page :total="moduleTableShow.listCount" :current="moduleTableShow.currentPage"
                  @on-change="changeModulePage"
                  show-elevator show-total></Page>
        </div>
    </TabPane>
    <TabPane label="MCU" name="mcu">
        <div>
            <Table :loading="listLoading" :columns="columnsList" :data="mcuData" border disabled-hover></Table>
        </div>
        <div class="margin-top-15" style="text-align: center">
            <Page :total="mcuTableShow.listCount" :current="mcuTableShow.currentPage"
                  @on-change="changeMcuPage"
                  show-elevator show-total></Page>
        </div>
    </TabPane>
</Tabs>
```

3. ==在`data`中添加`activeTab`变量：==用来存储当前选中的Tab名称。

4. ==`moduleTableShow` 和 `mcuTableShow`==，每个对象管理相应 Tab 的分页状态。

```js
data() {
  return {
    // ... 其他数据
    tableData: [],
    activeTab: 'module',  // 默认选中的Tab
    moduleTableShow: {
        currentPage: 1,
        listCount: 0
    },
    mcuTableShow: {
        currentPage: 1,
        listCount: 0
    },
  };
},
```

5. ==更新 getList 方法：==后端返回的是包含模组和MCU两种类型数据的一整个列表，需要在前端进行数据的筛选和展示。这可以通过在前端tableData存储整个列表，并根据当前选中的 Tab（模组或MCU）来过滤显示相应的数据。

```js
    getList () {
      let vm = this
      vm.listLoading = true
      getList({
        // 因为前端自己做筛选，所以这里可能需要一次性获取所有数据
        page: 1,
        // 假设这是能接受的最大数据量
        size: 1000
      }).then(response => {
        // 存储原始完整数据
        vm.tableData = response.data.data.list
        // vm.tableShow.listCount = response.data.data.count
        // 分别筛选模组和MCU的数据
        vm.moduleDataAll = vm.tableData.filter(item => item.type === 1)
        vm.mcuDataAll = vm.tableData.filter(item => item.type === 2)
        // 初始化moduleData和mcuData数组
        vm.moduleData = vm.moduleDataAll.slice(0, 10)
        vm.mcuData = vm.mcuDataAll.slice(0, 10)
        // 更新每个Tab对应的总数据量
        vm.moduleTableShow.listCount = vm.moduleDataAll.length
        vm.mcuTableShow.listCount = vm.mcuDataAll.length
        vm.listLoading = false
      })
    },
```

6. ==为每个Tab维护独立的分页信息：==为每个 Tab 实现独立的 `changePage` 和 `changeSize` 方法。

```js
    changeModulePage (page) {
      this.moduleTableShow.currentPage = page
      const pageSize = 10
      // 模组数据分页
      this.moduleData = this.moduleDataAll.slice((page - 1) * pageSize, page * pageSize)
    },
    changeMcuPage (page) {
      this.mcuTableShow.currentPage = page
      const pageSize = 10
      // MCU数据分页
      this.mcuData = this.mcuDataAll.slice((page - 1) * pageSize, page * pageSize)
    },
```

==代码解析：==

1. `this.moduleDataAll`：这个数组包含了从后端获取的所有模组项。
2. `.slice((modulePage - 1) * pageSize, modulePage * pageSize)`：这是 JavaScript 中的 `slice` 方法，用于从数组中提取特定部分，而不修改原数组。
   - `(modulePage - 1) * pageSize`：这是计算当前页的起始索引。例如，如果 `modulePage`（当前页码）是 1，并且 `pageSize`（每页显示的数量）是 10，那么起始索引是 `(1 - 1) * 10 = 0`。这意味着从数组的第一个元素开始。
   - `modulePage * pageSize`：这是计算当前页的结束索引。继续上面的例子，结束索引是 `1 * 10 = 10`。这意味着提取到数组的第10个元素（不包括第10个元素本身，因为 slice 方法是前闭后开的）。
3. `this.moduleData`：这是存储当前页显示的模组数据的数组。使用 `slice` 方法提取的数组部分将被赋值给 `this.moduleData`。

