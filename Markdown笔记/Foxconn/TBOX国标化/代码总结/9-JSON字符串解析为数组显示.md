> ### JSON字符串解析为数组显示

1. 在车辆监测页面中==报警数据==、==可充电储能装置电压==以及==可充电储能装置温度==页面都有一些字段的值以  json 字符串的形式传递过来，不是一个直接可读的 js 对象，为了在 Vue 组件中正确显示这个列表，我们需要先将这个 json 字符串转换成一个  js 对象或数组，这可以通过使用 JavaScript 的 ==`JSON.parse()`== 方法来实现。

2. 在这个解决方案中，`temp_probe_list` 被解析为一个数组，然后使用==`join(', ')`==转换为一个由==逗号分隔==的字符串，这样它就可以直接在 Vue 模板中显示了。注意，这里使用了 `try...catch` 来处理可能出现的 JSON 解析错误。
3. 如果有==多个==类似的字符串需要解析，并且这些字符串遵循相似的结构，我们可以使用一个循环来简化代码，避免重复的代码块。
   - ==定义 `fieldsToParse` 数组==：`fieldsToParse`数组定义了一系列需要解析的字段，每个字段包括需要解析的字段名`fieldName`和它们在 json 对象中对应的属性名`jsonProp`。
   - ==遍历 `fieldsToParse`==：使用 `forEach` 循环遍历 `fieldsToParse` 数组中的每个元素。
   - ==字段解析==： 对于每个字段对象，代码首先检查 `vehicleDataBack`（从服务器返回的原始数据）中是否存在该字段（`if (vehicleDataBack[field.fieldName])`）。如果存在，执行以下操作：
     - 使用 `JSON.parse` 尝试将该字段的值从字符串解析为 JSON 对象。
     - 访问解析后的 JSON 对象中的指定属性（由 `field.jsonProp` 指定），并将该属性的值（假设是一个数组）转换为以逗号分隔的字符串。
     - 如果解析过程中发生错误（例如，数据格式不正确或字段不存在），则捕获异常并打印错误信息。
   - ==更新组件数据==：解析并转换后的数据被重新赋值给 `vehicleDataBack` 中的相应字段。最后，`vm.vehicleData = vehicleDataBack` 将更新后的数据赋值给组件的数据属性，以便在前端展示。

```js
    // 获取车辆数据
    submit (showLoading = false) {
      let vm = this
      ...
      getData(vm.searchConf.vselect).then(response => {
        ...
        // 整车数据，发动机，车辆位置，极值数据，报警数据
        let vehicleDataBack = response.data.data.data.vehicleData
        const fieldsToParse = [
          { fieldName: 'fault_battery_list', jsonProp: 'fault_battery_list' },
          { fieldName: 'fault_drive_motor_list', jsonProp: 'fault_drive_motor_list' },
          { fieldName: 'fault_engine_list', jsonProp: 'fault_engine_list' },
          { fieldName: 'fault_others_list', jsonProp: 'fault_others_list' }
        ]
        fieldsToParse.forEach(field => {
          if (vehicleDataBack[field.fieldName]) {
            try {
              vehicleDataBack[field.fieldName] = JSON.parse(vehicleDataBack[field.fieldName])[field.jsonProp].join(', ')
            } catch (e) {
              console.error(`解析 ${field.fieldName} 出错`, e)
            }
          }
        })
        // 将解析后的数据赋值给组件的数据属性
        vm.vehicleData = vehicleDataBack
        ...

        // 可充电储能装置电压和可充电储能装置温度
        // cell_vol_list,  temp_probe_list字段是一个 JSON 字符串, 将字符串解析为一个数组显示。
        let batterySubsystemDataBack = response.data.data.data.batterySubsystemData
        // 给可充电储能装置排序，从小到大按顺序显示
        batterySubsystemDataBack.sort((a, b) => {
          return parseInt(a.battery_subsystem_no, 10) - parseInt(b.battery_subsystem_no, 10)
        })
        batterySubsystemDataBack.forEach(subsystem => {
          // 解析 cell_vol_list
          if (subsystem.cell_vol_list) {
            try {
              subsystem.cell_vol_list = JSON.parse(subsystem.cell_vol_list).cellsVoltage.join(', ')
            } catch (e) {
              console.error('解析 cell_vol_list 出错', e)
              subsystem.cell_vol_list = []
            }
          }
          // 解析 temp_probe_list
          if (subsystem.temp_probe_list) {
            try {
              subsystem.temp_probe_list = JSON.parse(subsystem.temp_probe_list).temp_list.join(', ')
            } catch (e) {
              console.error('解析 temp_probe_list 出错', e)
              subsystem.temp_probe_list = []
            }
          }
        })
        // 将解析后的数据赋值给组件的数据属性
        vm.batterySubsystemData = batterySubsystemDataBack
        ...
      }).catch(() => {
        ...
      })
    },
```
