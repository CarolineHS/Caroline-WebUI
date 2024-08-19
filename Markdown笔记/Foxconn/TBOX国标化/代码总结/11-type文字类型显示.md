> ### type对应的文字类型如何正确显示
>

1. `type` 字段是直接展示绑定的数据， `type` 是数字，它将直接显示这个数字。要显示对应的文本（比如“模组”和“MCU”），需要自定义一个 render 函数来转换这个值。
2. 在 `data` 函数中定义一个映射，将 `type` 的数字值映射到对应的文本。
3. 在 `columnsList` 的 `type` 字段中添加一个自定义的渲染函数。

```js
  data () {
    return {
      columnsList: [
        ...
        {
          title: '软件类型',
          align: 'center',
          key: 'type',
          minWidth: 100,
          render: (h, params) => {
            return h('div', this.typeMap[params.row.type])
          }
        },
        ...
      ],
      ...
      typeMap: {
        1: '模组',
        2: 'MCU'
      },
      ...
    }
  },
```
