import moment from 'moment';
import lodash from 'lodash';
import {translate} from './translate';
export const dateFormat = (date) => {
  let secondsAgo = moment().diff(date, 'seconds');
  let minutesAgo = lodash.toInteger(secondsAgo / 60);
  let hoursAgo = lodash.toInteger(secondsAgo / 3600);
  let daysAgo = lodash.toInteger(secondsAgo / 86400);
  if (secondsAgo < 60) {
    return `${secondsAgo} ${
      secondsAgo > 1 ? translate('secondsAgo') : translate('secondAgo')
    }`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo} ${
      minutesAgo > 1 ? translate('minutesAgo') : translate('minuteAgo')
    }`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} ${
      hoursAgo > 1 ? translate('hoursAgo') : translate('hourAgo')
    }`;
  } else {
    return `${daysAgo} ${
      daysAgo > 1 ? translate('daysAgo') : translate('dayAgo')
    }`;
  }
};
