// Core Modules
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

// Third Party Modules
import { ErrorStateMatcher } from '@angular/material/core';

export class CustomFormStateMatcher implements ErrorStateMatcher {
  isErrorState(formControl: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(formControl && formControl.invalid && (formControl.touched || isSubmitted));
  }
}
