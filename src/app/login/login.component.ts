import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  switchElement = true
  ;
  router$:Router;

  constructor(_router: Router ) {
    this.router$ = _router;
  }

  ngOnInit() {
  }

  onClick() {
    
  }
}
