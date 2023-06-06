import PrScroll from './PrScroll.vue' // 引入封装好的组件

// 按需引入
export { PrScroll }

const component = [PrScroll]

const _PrScroll = {
  install(App) {
    component.forEach((item) => {
      App.component(item.__name, item)
    })
  },
}

export default _PrScroll
