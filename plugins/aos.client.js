import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(AOS.init({ duration: 500, easing: 'ease-out-back' }))
