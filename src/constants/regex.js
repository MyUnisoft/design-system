export const MAIL_FORMAT = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;  // eslint-disable-line
export const PHONE_NUMBER_FORMAT = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

export const TAB_REGEX = /tab\/([0-9]+|:id)\/(.+)/;

// eslint-disable-next-line no-useless-escape
export const LINK_DETECTION_REGEX = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;

export const DATE_REGEX = /^([12][0-9]{3})_(0[1-9]|1[0-2])/;

export const NUMBER_DASH = /^[0-9-]*$/;
