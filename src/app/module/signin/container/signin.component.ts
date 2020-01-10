// Core Modules
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SigninFacade } from '../facade/signin.facade';

@Component({
  selector: 'buffer--signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(private signinFacade: SigninFacade, private activatedRoute: ActivatedRoute) {
    const {
      data: { title }
    } = this.activatedRoute.snapshot;
    this.signinFacade.setTitle(title);
  }

  ngOnInit() {}
}
