export const REG_EX_PATTERNS = {
  ALLOWED_CHARACTER: /[\s]/,
  ALPHABETICAL: /[^a-zA-Z ]/g, // ALPHABETICAL input pattern
  ALPHA_NUMERIC_WITH_SPACE: /^[a-z\d\s]+$/i,
  // tslint:disable-next-line
  EMAIL: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  NOT_ALLOWED_REPEATING_CHARACTER: /^([a-z])\1+$/,
  NO_SECIAL_CHARACTER: /[&\/\\#,+()$~%.'":*?<>{}-]/g, // no special character
  NUMBER_WITH_SPACE: /^(?=.*\d)[\d ]+$/,
  ONE_LOWER_CASE: /[a-z]/,
  ONE_NUMBER: /[0-9]/,
  ONE_SPACE: /\s\s+/g, // one space only pattern
  ONE_SPECIAL_CHARACTER: /^[a-zA-Z0-9_.-]*$/,
  ONE_UPPER_CASE: /[A-Z]/,
  ONLY_NUMBER: /\D/g, // only numbers,
  PASSWORD: /^[a-zA-Z0-9!@#$%^&*\-_.]*$/,
  PASSWORD_SPECIAL_CHARACTER: /[!@#$%^&*-]/,
  URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  USERNAME: /^[a-zA-Z0-9]*$/,
  WHITE_SPACE: /\s/g,
};
