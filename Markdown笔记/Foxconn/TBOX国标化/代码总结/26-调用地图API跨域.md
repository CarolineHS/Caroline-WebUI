> ### 调用百度地图进行坐标转换和对比

1. ==引入百度地图API的JavaScript文件：==  在public文件夹中的index.html文件引入。

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=r73mrbQGd0dqmaZ7RYg9ReGGhM93RToo"></script>
    <title></title>
  </head>
  <body>
    ...
  </body>
</html>
```

1. 使用`lastLng`和`lastLat`来记录上一次的经纬度，用于判断是否需要更新地图位置。
2. 通过`submit`方法获取车辆数据，并调用`handleCoordinateConversion`方法进行经纬度转换和地图更新。
3. `handleCoordinateConversion`方法负责经纬度转换，并调用`updateMapLocation`方法更新百度地图上的标注点。
4. 通过比较当前经纬度和上一次的经纬度，避免不必要的地图更新。

```js
export default {
  data () {
    return {
      ...
      lastLng: null,
      lastLat: null,
      ...
    }
  },
  ...
  methods: {
    ...
    // 获取车辆数据
    submit (showLoading = false) {
      let vm = this
      ...
      getData(vm.selectedVin).then(response => {
        ...
        // 将解析后的数据赋值给组件的数据属性
        vm.vehicleData = vehicleDataBack
        console.log('获取整车数据成功! vm.vehicleData: ', vm.vehicleData)
        // 更新地图标注
        vm.handleCoordinateConversion(vm.vehicleData.longitude, vm.vehicleData.latitude)
        // vm.updateMapLocation(vm.vehicleData.longitude, vm.vehicleData.latitude)
        ...
      }).catch(() => {
        ...
      })
    },
    handleCoordinateConversion (lng, lat) {
      let vm = this
      if (lng && lat) {
        // 判断是否与上一次的经纬度一致
        if (lng !== vm.lastLng || lat !== vm.lastLat) {
          let url = `https://api.map.baidu.com/geoconv/v2/?coords=${lng},${lat}&model=2&ak=r73mrbQGd0dqmaZ7RYg9ReGGhM93RToo`
          vm.$jsonp(url).then(response => {
            let result = response.result
            if (result && result.length > 0) {
              let convertLng = result[0].x
              let convertLat = result[0].y
              vm.updateMapLocation(convertLng, convertLat)
              vm.lastLng = lng
              vm.lastLat = lat
            }
          })
        }
      }
    },
    // 更新地图标注
    updateMapLocation (lng, lat) {
      let vm = this
      if (lng && lat) {
        // 创建新的点坐标
        let newPoint = new BMap.Point(lng, lat)
        // 清除地图上所有的覆盖物
        vm.map.clearOverlays()
        // 创建新的标注
        let marker = new BMap.Marker(newPoint)
        // 将标注添加到地图中
        vm.map.addOverlay(marker)
        // 将地图中心点移动到新的位置
        vm.map.panTo(newPoint)
      }
    },
    ...
  },
  ...
}
```

这段代码实现了在获取车辆数据后，通过百度地图API进行经纬度转换并更新地图标注的功能。

这里我们使用了JSONP方法解决了调用百度地图API时产生的跨域问题。JSONP（JSON with Padding）是一种可以绕过浏览器同源策略（Same-Origin Policy）的方法，主要用于跨域请求数据。它的原理是通过动态创建 `<script>` 标签来实现跨域请求，因为 `<script>` 标签的 `src` 属性可以加载来自任何域的脚本，而不受同源策略的限制。

#### 使用 JSONP 解决跨域问题的步骤

**安装 vue-jsonp**

首先确保你的项目中安装了 `vue-jsonp`：

```
npm install vue-jsonp --save
```

**在 Vue 项目中注册并使用 `vue-jsonp`**

在src/main.js文件中添加：

```js
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'

Vue.use(VueJsonp)
```

**通过 JSONP 进行跨域请求**

1. 判断经纬度是否存在
2. 判断是否与上一次的经纬度一致
3. 构建JSONP请求URL，构建用于请求百度地图API的URL
4. 发送JSONP请求，使用 `$jsonp` 方法发送请求，并处理响应。
5. 从API响应中提取`result`数组。如果`result`存在且长度大于0，说明转换成功，获取转换后的经纬度`convertLng`和`convertLat`。
6. 调用`updateMapLocation`方法，用转换后的经纬度更新地图位置。

```js
handleCoordinateConversion (lng, lat) {
    let vm = this
    if (lng && lat) {
        // 判断是否与上一次的经纬度一致
        if (lng !== vm.lastLng || lat !== vm.lastLat) {
            let url = `https://api.map.baidu.com/geoconv/v2/?coords=${lng},${lat}&model=2&ak=r73mrbQGd0dqmaZ7RYg9ReGGhM93RToo`
            vm.$jsonp(url).then(response => {
                let result = response.result
                if (result && result.length > 0) {
                    let convertLng = result[0].x
                    let convertLat = result[0].y
                    vm.updateMapLocation(convertLng, convertLat)
                    vm.lastLng = lng
                    vm.lastLat = lat
                }
            })
        }
    }
},
```

==注意：==JSONP 的缺点是只支持 GET 请求，如果需要使用其他类型的请求（如 POST），则需要考虑其他跨域解决方案，如 CORS 配置或代理服务器。