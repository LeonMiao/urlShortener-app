import { Input, Component, OnInit } from '@angular/core';
import IAccountModel from '../../share/IAccountModel';

@Component({
  selector: 'lists-table',
  templateUrl: './lists-table.component.html',
  styleUrls: ['./lists-table.component.css']
})
export class ListsTableComponent implements OnInit {
  @Input() account: IAccountModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
