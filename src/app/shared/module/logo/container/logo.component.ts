// Core Modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'buffer--logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPage(page: string): void {
    this.router.navigateByUrl(page);
  }
}
