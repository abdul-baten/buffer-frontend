import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignupFacade } from '@app/signup/facade/signup.facade';

@Component({
  selector: 'buffer--signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private signupFacade: SignupFacade, private activatedRoute: ActivatedRoute) {
    const {
      data: { title },
    } = this.activatedRoute.snapshot;
    this.signupFacade.setTitle(title);
  }
  ngOnInit() {}
}
