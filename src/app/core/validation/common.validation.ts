import { RegexPatterns } from '../constant';
import type { FormControl, FormGroup } from '@angular/forms';

export class CommonValidator {
  public static alphaNumeric (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.ALPHA_NUMERIC_WITH_SPACE;

    return regex.test(control.value) ? null : { ALPHA_NUMERIC: true };
  }

  public static emailAddress (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.EMAIL;

    return regex.test(control.value) ? null : { INVALID_EMAIL: true };
  }

  public static numbersOnly (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.ONLY_NUMBER;

    return !regex.test(control.value) || control.value.trim() === '' ? { ONLY_NUMBER: true } : null;
  }

  public static validURL (control: FormControl): { [key: string]: boolean } | null {
    const regex = RegexPatterns.URL;

    if (control.value) {
      return regex.test(control.value) ? null : { INVALID_URL: true };
    }

    return null;
  }

  public static compareTwoFields (control_name: string, matching_control: string): (form_group: FormGroup)=> void {
    return (form_group: FormGroup) => {
      const control = form_group.controls[control_name];
      const match_control = form_group.controls[matching_control];

      if (match_control.errors && !match_control.errors.MISMATCH) {
        return;
      }

      if (control.value === match_control.value) {
        match_control.setErrors(null);
      } else {
        match_control.setErrors({ MISMATCH: true });
      }
    };
  }
}
