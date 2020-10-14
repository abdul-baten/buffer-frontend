import { RegexPatterns } from '../constant';
import { FormControl } from '@angular/forms';

export class PasswordValidator {
  static oneUpperCase (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.ONE_UPPER_CASE;

    return regex.test(control.value) ? null : { ONE_UPPER_CASE: true };
  }

  static oneLowerCase (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.ONE_LOWER_CASE;

    return regex.test(control.value) ? null : { ONE_LOWER_CASE: true };
  }

  static oneNumber (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.ONE_NUMBER;

    return regex.test(control.value) ? null : { ONE_NUMBER: true };
  }

  static oneSpecialChar (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.ONE_SPECIAL_CHARACTER;

    return regex.test(control.value) ? null : { ONE_SPECIAL_CHARACTER: true };
  }

  static allowedPasswordSpecialChars (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.PASSWORD_SPECIAL_CHARACTER;
    const allowed_special_characters = RegexPatterns.PASSWORD;

    return !regex.test(control.value) || !control.value.match(allowed_special_characters) ? { SPECIAL_CHARACTER_NOT_ALLOWED: true } : null;
  }
}
