import PrScroll from './PrScroll.vue'
import type { Plugin } from 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    PrScroll: typeof PrScroll
  }
}
export { PrScroll }

export default {} as Plugin
