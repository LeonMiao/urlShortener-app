import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  inputLongUrl:string;
  router$:Router;

  constructor( _router: Router ) {
    //this.convert = true;
    this.router$ = _router;
  }
  ngOnInit() {
    //this.convert = true;
  }

  onClick(){
    
    this.router$.navigate(['/url']);
  }


  onSubmit(){
    console.log(this.inputLongUrl);
    this.router$.navigate(['/url/'+this.inputLongUrl]);

  }


}
