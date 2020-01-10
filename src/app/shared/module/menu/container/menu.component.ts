// Core Modules
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Third Party Modules

@Component({
  selector: 'buffer--menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToSignupPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
