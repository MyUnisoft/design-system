import _get from 'lodash/get';
import fr from './locales/fr';

const I18n = {
  t: (key) => _get(fr, key, key)
}

export default I18n;
