import Joi from 'joi';
import { CommonValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { noop } from 'rxjs';
import { RegexPatterns } from 'src/app/core/constant';
import { SignupFacade } from '../../facade/signup.facade';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'buffer-signup-form',
  styleUrls: ['./signup-form.component.css'],
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent {
  public form: FormGroup;
  public form_clicked = false;
  public is_password_visible = false;

  private full_name_validation_rules = Joi.string().regex(RegexPatterns.ALPHA_NUMERIC_WITH_SPACE).
    trim().
    required().
    messages({
      'string.base': 'Full name should be of type text.',
      'string.empty': 'Full name cannot be empty.',
      'string.pattern.base': 'Only letters, numbers & spaces are allowed.'
    });

  private email_address_validation_rules = Joi.string().email({
    minDomainSegments: Number.parseInt('2', 10),
    tlds: false
  }).
    trim().
    required().
    messages({
      'string.base': 'Email address should be of type text.',
      'string.email': 'Please enter a valid email address.',
      'string.empty': 'Email address cannot be empty.'
    });

  private password_validation_rules = Joi.string().
    regex(RegexPatterns.PASSWORD).
    required().
    messages({
      'string.base': 'Password should be of type text.',
      'string.empty': 'Password cannot be empty.',
      'string.pattern.base': 'Password should be minimum 8 characters long with a mix of letters, numbers & symbols.'
    });

  constructor (
    private readonly facade: SignupFacade,
    private readonly formBuilder: FormBuilder
  ) {
    this.form = this.buildSignupForm();

    setTimeout(() => {
      throw new Error('asas');
    }, 3000);
  }

  private buildSignupForm (): FormGroup {
    return this.formBuilder.group({
      user_email: ['', CommonValidator.validateControl('user_email', this.email_address_validation_rules)],
      user_full_name: ['', CommonValidator.validateControl('user_full_name', this.full_name_validation_rules)],
      user_password: ['', CommonValidator.validateControl('user_password', this.password_validation_rules)]
    });
  }

  public signUp (): void {
    if (this.form.valid) {
      this.form_clicked = true;
      this.facade.
        signupUser(this.form.value).
        pipe(tap(() => {
          this.facade.navigate('/dashboard');
          this.form.reset();
        })).
        subscribe(noop);
    }
  }
}
