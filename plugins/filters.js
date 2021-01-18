import Vue from 'vue'
import * as moment from 'moment'

Vue.filter('hour', function (val) {
  if (!val) return ''
  val = val.toString()
  return moment(val, 'hh:mm:ss').format('hh:mm A')
})
