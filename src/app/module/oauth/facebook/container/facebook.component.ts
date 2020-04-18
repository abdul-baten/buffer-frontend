import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'buffer--app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent implements OnInit {
  constructor(private router: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params: { code: string }) => {
      const { code } = params;
      console.warn(code);

      if (code) {
        this.http
          .get('https://localhost:3000/api/v1.0.0/social-profile/getPages', { params: { code } })
          .subscribe((resp: any) => {
            console.warn(resp);
          });
      }
    });
  }
}
