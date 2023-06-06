# 基于 vue3 封装的一个滚动列表，支持鼠标移入暂停、滚轮滚动。

[在线预览](https://pryun.vip/pr-scroll/)

## 使用方法

#### 全局引入

```js
import PrScroll from 'pr-scroll'
app.use(PrScroll)
```

#### 按需引入

```js
import { PrScroll } from 'pr-scroll'
import { ref } from 'vue'

const list = ref([
  { id: 1, name: '小明1', age: 18, height: '200px', bg: 'rgb(201, 106, 17)' },
  { id: 2, name: '小王2', age: 18, height: '220px', bg: '#0097ff' },
  { id: 3, name: '小王3', age: 18, height: '439px', bg: 'green' },
  { id: 4, name: '小王4', age: 18, height: '206px', bg: 'rgb(24, 60, 107)' },
  { id: 5, name: '小王5', age: 18, height: '186px', bg: 'rgb(24, 160, 107)' },
  { id: 6, name: '小王6', age: 18, height: '296px', bg: 'rgb(24, 201, 107)' },
  { id: 7, name: '小王7', age: 18, height: '200px', bg: 'rgb(1, 106, 17)' },
  { id: 8, name: '小王8', age: 18, height: '300px', bg: 'rgb(21, 206, 117)' }
])
```

```html
<div class="list">
  <PrScroll :list="list" :interval="4">
    <template #item="item">
      <div class="item" :style="[{ height: item.height }]">
        <div class="item-content" :style="[{ 'background-color': item.bg }]">{{ item.name }}</div>
      </div>
    </template>
  </PrScroll>
</div>
```

```css
.list {
  padding: 4px 0;
  box-sizing: border-box;
  position: relative;
  width: 500px;
  height: 700px;
  border: 1px solid;
  overflow: hidden;
}
.item {
  padding: 4px 0;
  box-sizing: border-box;
  height: 200px;
}
.item-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(24, 60, 107);
}
```

## 代码仓库

[github](https://github.com/breathe97/pr-scroll)

## 贡献

breathe
