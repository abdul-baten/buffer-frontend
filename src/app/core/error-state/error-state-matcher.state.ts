import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class CustomFormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(formControl: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(formControl && formControl.invalid && ((formControl.touched && formControl.dirty) || isSubmitted));
  }
}
