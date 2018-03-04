import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  public isLoginPage () {
    let isLoginPage = false;
    const path: any = this.activatedRoute.snapshot.url[0].path;
    if (path === '/' || path === '/login') {
      isLoginPage = true;
    }
    return isLoginPage;
  }
}
