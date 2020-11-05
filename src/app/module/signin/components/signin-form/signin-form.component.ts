import Joi from 'joi';
import { CommonValidator } from 'src/app/core/validation';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegexPatterns } from 'src/app/core/constant';
import { SigninFacade } from '../../facade/signin.facade';

@Component({
  selector: 'buffer-signin-form',
  styleUrls: ['./signin-form.component.css'],
  templateUrl: './signin-form.component.html'
})
export class SigninFormComponent {
  public form: FormGroup;
  public form_clicked = false;
  public is_password_visible = false;

  private email_address_validation_rules = Joi.string().
    email({
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

  constructor (private readonly formBuilder: FormBuilder, private readonly facade: SigninFacade) {
    this.form = this.buildSigninForm();
  }

  private buildSigninForm (): FormGroup {
    return this.formBuilder.group({
      user_email: ['alamin@technoflame.com', CommonValidator.validateControl('user_email', this.email_address_validation_rules)],
      user_password: ['baten@CAT2019', CommonValidator.validateControl('user_password', this.password_validation_rules)]
    });
  }

  public login (): void {
    this.form_clicked = true;
    const { user_email, user_password } = this.form.value;

    this.facade.
      loginUser(user_email, user_password).
      pipe(finalize(() => {
        this.form.reset();
        this.form_clicked = false;
      })).
      subscribe(() => this.facade.navigateToDashboard());
  }

  public navigate (route: string): void {
    this.facade.navigate(route);
  }
}
