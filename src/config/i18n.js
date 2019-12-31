import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUS from 'view-design/dist/locale/en-US'
import zhCN from 'view-design/dist/locale/zh-CN'

import zh from '@/lang/zh'
import en from '@/lang/en'

Vue.use(VueI18n)

Vue.locale = () => {}

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: { ...zh, ...zhCN },
    en: { ...en, ...enUS }
  }
})

export default i18n
