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

  static validURL(c: FormControl): { [s: string]: boolean } {
    const r = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return c.value ? (!r.test(c.value) ? { validURL: true } : null) : null;
  }
}
