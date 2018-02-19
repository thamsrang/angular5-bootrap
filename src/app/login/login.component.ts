import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  submitted = false;
  // this.data = { name: 'some name' };
  onSubmit() {
    this.submitted = true;
    // this.http.post('http://someurl', JSON.stringify(this.data)).subscribe(...);
  }

}
