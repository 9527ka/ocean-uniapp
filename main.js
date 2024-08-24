import App from './App'
import Vue from 'vue'

import en from './locale/en.json'
import ja from './locale/ja.json'
import ti from './locale/ti.json'
import fa from './locale/fa.json'
import hd from './locale/hd.json'
import ko from './locale/ko.json'
import ta from './locale/ta.json'
import In from './locale/in.json'
const messages = {
	en,
	ja,
	ti,
	fa,
	hd,
	ko,
	ta,
	in: In
}

let i18nConfig = {
  locale: localStorage.getItem('lang') || 'en',// 获取已设置的语言
  messages
  
}

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)


import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	methods: {
		switchLanguage(lang) {
			this.$i18n.locale = lang;
		}
	},
	...App,
})

Vue.prototype.$newLang = app.switchLanguage;

app.$mount()
