import memoize from 'lodash.memoize';
import vi from '../constants/languages/vi';
import en from '../constants/languages/en';
import lodash from 'lodash';
import i18n from 'i18n-js';
let currentLanguage = '';
const regex = /[a-zA-Z_]+/gm;
i18n.translations = {
  en,
  vi,
};
export type Keys = keyof typeof vi | string;
export const translate: any = memoize((_key: Keys) => {
  let key = _key;
  if (!key) {
    return '';
  }
  key = key.replace('.', '_').replace(/&|-/gi, '').replace('/', '');
  const options = {defaultValue: 'missKey: ' + key};

  let matches = key?.match(regex);
  if (matches == null || matches?.length == 0) {
    return i18n.t(key, options);
  }
  if (matches?.length == 1 && matches[0].length == key.length) {
    return i18n.t(key, options);
  }
  let news = lodash
    .uniq(matches)
    .reduce((d: string, e: string, i: number) => d.replace(e, `{${i}}`), key);
  return news.format(
    matches.map((m: string) => translate(m.replace(/[_ ]$/, ''))),
  );
});
export const configTranslation = (languageTag: string) => {
  if (currentLanguage == languageTag) {
    return;
  }
  currentLanguage = languageTag;
  translate.cache.clear();
  i18n.locale = languageTag;
};
