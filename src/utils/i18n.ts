import locale from '../i18n/locale.ts'

const LOCALES: Map<string, string> = new Map(Object.entries(locale))

function t(locale: TemplateStringsArray) {
  return LOCALES.get(locale[0]) ?? locale[0]
}

function f(locale: TemplateStringsArray) {
  return (...args: (string | number)[]) =>
    args.reduce((acc: string, cur, index) => acc.replaceAll(`{${index}}`, cur.toString()), t(locale))
}

export default {
  t,
  f
}
