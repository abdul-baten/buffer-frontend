import { AppState } from 'src/app/reducers';
import { Component, OnInit } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { I_USER } from '@core/model';
import { selectUserInfo } from 'src/app/selectors/user.selector';
import { SignupFacade } from '@app/signup/facade/signup.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buffer--onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
})
export class OnboardComponent implements OnInit {
  onboardForm: FormGroup;
  userInfo: I_USER;

  errorStateMatcher = new CustomFormErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private signupFacade: SignupFacade, private store: Store<AppState>) {
    this.onboardForm = this.buildOnboardForm();
  }

  ngOnInit() {
    this.store.select(selectUserInfo).subscribe((userInfo: I_USER) => {
      this.userInfo = userInfo;
    });
  }

  private buildOnboardForm(): FormGroup {
    return this.formBuilder.group({
      attribution: ['', Validators.required],
      businessType: ['', Validators.required],
      companyName: ['', Validators.required],
      companySize: ['', Validators.required],
    });
  }

  handleSignup(): void {
    if (this.onboardForm.valid) {
      const { attribution, businessType, companyName, companySize } = this.onboardForm.value;
      this.signupFacade.onboardUser({ attribution, businessType, companyName, companySize }).subscribe(() => {
        this.signupFacade.navigateToPage('/dashboard');
      });
    }
  }
}
