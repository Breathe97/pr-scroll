//index.js
import PrScroll from './components/PrScroll/PrScroll.vue' // 引入封装好的组件

export { PrScroll } //实现按需引入*

const components = [PrScroll]
const install = function (App, options) {
  components.forEach((component) => {
    App.component(component.name, component)
  })
}
export default { install } // 批量的引入*
