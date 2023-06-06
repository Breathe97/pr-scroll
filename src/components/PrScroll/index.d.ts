import PrScroll from './PrScroll.vue'

declare module 'vue' {
  export interface GlobalComponents {
    PrScroll: typeof PrScroll
  }
}
export { PrScroll }
