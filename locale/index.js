import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 引入语言包
import en from './en.json';
import ja from './ja.json'

Vue.use(VueI18n);

const messages = {
  en,
  ja
};

const i18n = new VueI18n({
  locale: 'ja', // 设置默认语言
  messages, // 设置语言包
});

export default i18n;