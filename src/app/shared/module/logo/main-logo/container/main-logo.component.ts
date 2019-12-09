// Core Modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--main-logo',
  templateUrl: './main-logo.component.html',
  styleUrls: ['./main-logo.component.scss']
})
export class MainLogoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
