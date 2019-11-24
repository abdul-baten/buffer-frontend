import { FormGroup, FormControl } from '@angular/forms';

export class PasswordValidator {
  static passwordMismatch(formGroup: FormGroup): { [s: string]: boolean } {
    const { password, confirmPassword } = formGroup.value;
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }

  static oneUpperCase(c: FormControl): { [s: string]: boolean } {
    const r = /[A-Z]/;
    return !r.test(c.value) ? { oneUpperCase: true } : null;
  }

  static oneLowerCase(c: FormControl): { [s: string]: boolean } {
    const r = /[a-z]/;
    return !r.test(c.value) ? { oneLowerCase: true } : null;
  }

  static oneNumber(c: FormControl): { [s: string]: boolean } {
    const r = /[0-9]/;
    return !r.test(c.value) ? { oneNumber: true } : null;
  }

  static oneSpecialChar(c: FormControl): { [s: string]: boolean } {
    const r = /^[a-zA-Z0-9_.-]*$/;
    return !r.test(c.value) ? { oneSpecialChar: true } : null;
  }

  static allowedPasswordSpecialChars(c: FormControl): { [s: string]: boolean } {
    const r = /[!@#$%^&*-]/;
    const allowedChars = /^[a-zA-Z0-9!@#$%^&*\-_.]*$/;
    return !r.test(c.value) || !c.value.match(allowedChars) ? { allowedPasswordSpecialChars: true } : null;
  }
}
