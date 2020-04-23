// SASS
import '../sass/app.scss'

// jQuery
import $ from 'jquery'
window.$ = $

// Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'

// AOS
import AOS from 'aos'
AOS.init()

// Hammer js
import Hammer from 'hammerjs'
window.Hammer = Hammer

// Initialize Vue
import Vue from 'vue'
import Main from './Main.vue'
var app = new Vue({
  el: '#vue',
  render: h => h(Main)
})
