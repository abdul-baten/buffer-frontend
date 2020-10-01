import { FormControl, FormGroup } from '@angular/forms';
import { REG_EX_PATTERNS } from '../constant';

export class CommonValidator {
  static alphaNumeric(control: FormControl): { [key: string]: boolean } {
    const regex = REG_EX_PATTERNS.ALPHA_NUMERIC_WITH_SPACE;
    return !regex.test(control.value) ? { alphaNumericontrol: true } : null;
  }

  static emailAddress(control: FormControl): { [key: string]: boolean } {
    const regex = REG_EX_PATTERNS.EMAIL;
    return !regex.test(control.value) ? { invalidEmail: true } : null;
  }

  static notAllowRepeatingCharacter(control: FormControl): { [key: string]: boolean } {
    const regex = REG_EX_PATTERNS.NOT_ALLOWED_REPEATING_CHARACTER;
    return !regex.test(control.value) ? { notAllowRepeatingCharacter: true } : null;
  }

  static numbersOnly(control: FormControl): { [key: string]: boolean } {
    const regex = REG_EX_PATTERNS.ONLY_NUMBER;
    return !regex.test(control.value) || control.value.trim() === '' ? { numbersOnly: true } : null;
  }

  static numberSpaceOnly(control: FormControl): { [key: string]: boolean } {
    const regex = REG_EX_PATTERNS.NUMBER_WITH_SPACE;
    return !regex.test(control.value) || control.value.trim() === '' ? { numberSpaceOnly: true } : null;
  }

  static validURL(control: FormControl): { [key: string]: boolean } {
    const regex = REG_EX_PATTERNS.URL;
    return control.value ? (!regex.test(control.value) ? { validURL: true } : null) : null;
  }

  static compareTwoFields(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
