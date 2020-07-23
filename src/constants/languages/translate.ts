import memoize from 'lodash.memoize';
import i18n from 'i18n-js';
import vi from './vi';
import en from './en';
import lodash from 'lodash';
const regex = /[a-zA-Z_]+/gm;
let currentLanguage = '';
export type Keys = keyof typeof vi | string;
i18n.translations = {
  vi,
  en,
}
export const translate: any = memoize((_key: Keys) => {
  if (_key == undefined || _key == '') {
    return '';
  }
  const key = _key.replace('.', '_');
  let matches = key.match(regex);
  if (matches == null || matches.length == 0) {
    return i18n.t(key);
  }
  if (matches.length == 1 && matches[0].length == key.length) {
    return i18n.t(key);
  }
  let news = lodash
    .uniq(matches)
    .reduce((d: string, e: string, i: number) => d.replace(e, `{${i}}`), key);
  return news.format(matches.map((m: string) => translate(m)));
});
export const configTranslation = (
  languageTag: string,
  translationGetters: any,
) => {
  if (currentLanguage == languageTag) {
    return;
  }
  currentLanguage = languageTag;
  translate.cache.clear();
  i18n.translations = {[languageTag]: translationGetters[languageTag]};
  i18n.locale = languageTag;
};