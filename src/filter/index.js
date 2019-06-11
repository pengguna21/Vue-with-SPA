import Vue from 'vue'

import numberData from './numberData'

export default () => {
  Vue.filter('numberDataPlus', (number) =>
  numberData(number)
  )
}