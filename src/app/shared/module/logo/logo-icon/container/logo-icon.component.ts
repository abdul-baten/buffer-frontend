// Core Modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss']
})
export class LogoIconComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
