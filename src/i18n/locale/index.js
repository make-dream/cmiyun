import iview_en_US from 'iview/dist/locale/en-US'
import iview_zh_CN from 'iview/dist/locale/zh-CN'
import iview_zh_TW from 'iview/dist/locale/zh-TW'
import en from './en'
import zh from './zh'
import zh_TW from './zh-TW'

export const messages = {
    en: Object.assign(
        en,
      iview_en_US
    ),
    zh: Object.assign(
      zh,
      iview_zh_CN
    ),
    'zh-TW': Object.assign(
      zh_TW,
      iview_zh_TW
    )
}

export {
    en,
    zh,
    zh_TW
}