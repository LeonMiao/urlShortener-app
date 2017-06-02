import { Input, Component, OnInit } from '@angular/core';
import IUrlModel from '../../share/IUrlModel';

@Component({
  selector: 'items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  @Input() items: IUrlModel[];

  constructor() { }

  ngOnInit() {
  }

}
