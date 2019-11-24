import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { SubSink } from 'subsink';

import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from 'src/app/module/signin/container/signin.component';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.scss']
})
export class AuthMenuComponent implements OnInit, OnDestroy {
  private subscriptions$: SubSink = new SubSink();

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {}

  navigateToSignupPage(page: string = '/'): void {
    this.router.navigateByUrl(page);
  }

  navigateToSignInPage(): void {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '400px',
      disableClose: true
    });

    this.subscriptions$.add(
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      })
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
