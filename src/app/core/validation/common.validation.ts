import { FormControl } from '@angular/forms';

export class CommonValidator {
  static alphaNumeric(c: FormControl): { [s: string]: boolean } {
    const r = /^[a-zA-Z0-9]*$/;
    return !r.test(c.value) ? { alphaNumeric: true } : null;
  }

  static notAllowRepeatingCharacter(c: FormControl): { [s: string]: boolean } {
    const r = /^([a-z])\1+$/;
    return !r.test(c.value) ? { notAllowRepeatingCharacter: true } : null;
  }

  static numbersOnly(c: FormControl): { [s: string]: boolean } {
    const r = /^[0-9]*$/;
    return !r.test(c.value) || c.value.trim() === '' ? { numbersOnly: true } : null;
  }

  static numberSpaceOnly(c: FormControl): { [s: string]: boolean } {
    const r = /^(?=.*\d)[\d ]+$/;
    return !r.test(c.value) || c.value.trim() === '' ? { numberSpaceOnly: true } : null;
  }
}
