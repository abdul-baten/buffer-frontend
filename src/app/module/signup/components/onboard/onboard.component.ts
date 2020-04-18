import { AppState } from 'src/app/reducers';
import { Component, OnInit } from '@angular/core';
import { CustomFormErrorStateMatcher } from '@core/error-state/error-state-matcher.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectUserInfo } from 'src/app/selectors/user.selector';
import { SignupFacade } from '@app/signup/facade/signup.facade';
import { Store } from '@ngrx/store';
import { User } from '@core/model/user/user.model';

@Component({
  selector: 'buffer--onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss'],
})
export class OnboardComponent implements OnInit {
  onboardForm: FormGroup;
  userInfo: User;

  errorStateMatcher = new CustomFormErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private signupFacade: SignupFacade, private store: Store<AppState>) {
    this.onboardForm = this.buildOnboardForm();
  }

  ngOnInit() {
    this.store.select(selectUserInfo).subscribe((userInfo: User) => {
      this.userInfo = userInfo;
    });
  }

  private buildOnboardForm(): FormGroup {
    return this.formBuilder.group({
      attribution: ['', Validators.required],
      bussinesType: ['', Validators.required],
      companyName: ['', Validators.required],
      companySize: ['', Validators.required],
    });
  }

  handleSignup(): void {
    if (this.onboardForm.valid) {
      const { attribution, bussinesType, companyName, companySize } = this.onboardForm.value;
      this.signupFacade
        .onboardUser({ attribution, bussinesType, companyName, companySize, plan: 'trial', userId: this.userInfo.id })
        .subscribe(() => {
          this.signupFacade.navigateToPage('/dashboard');
        });
    }
  }
}
