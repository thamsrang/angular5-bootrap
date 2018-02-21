import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }
  public isLoginPage () {
    let isLoginPage = false;
    if (this.router.url === '/' || this.router.url === '/login') {
      isLoginPage = true;
    }
    return isLoginPage;
  }
}
