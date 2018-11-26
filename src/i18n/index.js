import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
import { messages } from './locale'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

export default i18n
