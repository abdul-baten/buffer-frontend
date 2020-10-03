import { FormControl } from '@angular/forms';
import { REG_EX_PATTERNS } from '../constant';

export class PasswordValidator {
  static oneUpperCase(control: FormControl): { [key: string]: boolean } | null {
    const regex = REG_EX_PATTERNS.ONE_UPPER_CASE;
    return !regex.test(control.value) ? { oneUpperCase: true } : null;
  }

  static oneLowerCase(control: FormControl): { [key: string]: boolean } | null {
    const regex = REG_EX_PATTERNS.ONE_LOWER_CASE;
    return !regex.test(control.value) ? { oneLowerCase: true } : null;
  }

  static oneNumber(control: FormControl): { [key: string]: boolean } | null {
    const regex = REG_EX_PATTERNS.ONE_NUMBER;
    return !regex.test(control.value) ? { oneNumber: true } : null;
  }

  static oneSpecialChar(control: FormControl): { [key: string]: boolean } | null {
    const regex = REG_EX_PATTERNS.ONE_SPECIAL_CHARACTER;
    return !regex.test(control.value) ? { oneSpecialChar: true } : null;
  }

  static allowedPasswordSpecialChars(control: FormControl): { [key: string]: boolean } | null {
    const regex = REG_EX_PATTERNS.PASSWORD_SPECIAL_CHARACTER;
    const allowedChars = REG_EX_PATTERNS.PASSWORD;
    return !regex.test(control.value) || !control.value.match(allowedChars) ? { allowedPasswordSpecialChars: true } : null;
  }
}
