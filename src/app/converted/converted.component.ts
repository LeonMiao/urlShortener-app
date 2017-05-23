import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-converted',
  templateUrl: './converted.component.html',
  styleUrls: ['./converted.component.css']
})
export class ConvertedComponent implements OnInit {
  router$:Router;

  constructor(_router: Router ) {
    this.router$ = _router;
  }

  ngOnInit() {
  }

  onClick() {
    this.router$.navigate(['/url']);
  }
}
