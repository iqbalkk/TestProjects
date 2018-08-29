import { Component, OnInit, Input, Inject } from '@angular/core';
import { Medicine } from '../app.component';
import { MAT_DIALOG_DATA } from '@angular/material';
import {TableComponent} from '../table/table.component';

@Component({
  selector: 'app-dialog-example',
 templateUrl:'./dialog-example.component.html'

    ,
    styles:[]
})
export class DialogExampleComponent implements OnInit {
  @Input() Medicine:any;

  public itemName: string;
public itemImageUrl: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
