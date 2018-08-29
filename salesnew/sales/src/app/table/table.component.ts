import { Component, OnInit, ViewChildren } from '@angular/core';
import {MedicinetableService} from '../medicinetable.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
  
})
export class TableComponent implements OnInit {
  
  // @ViewChildren('inputs') inputs;
  
  characters: Observable<any[]>;
columns: string[];

// keytab(event){
//   let element = event.srcElement.nextElementSibling; // get the sibling element

//   if(element == null)  // check if its null
//       return;
//   else
//       element.focus();   // focus if not null
// }
// getrow(char:Observable<any>,cal:string)
// {
//   this.char=
// }


public currentCompany;

  public selectCompany(event: any, char: any) {

    this.currentCompany = char.Item;
  }
  selectRow(char)
  {
    console.log(char);
  }

  constructor(private atService: MedicinetableService) { 
    
  }

  ngOnInit() {
    this.columns = this.atService.getColumns(); 
    this.characters = this.atService.getCharacters();
   
    
  }
 
  // focusInput(charIdx: number, colIdx: number) {
  //   console.log("FOCUS ON", charIdx, colIdx);

  //     let inputEls = this.inputs.toArray();
  //     let flatIdx = (charIdx * this.columns.length) + colIdx;
  //     inputEls[flatIdx].nativeElement.focus();
    
  // }
  // // shiftFocusDown(charIdx:number, colIdx:number) {
  // //   console.log("DOWN", colIdx, charIdx);
  // //   charIdx = Math.min(charIdx + 1, this.characters.length - 1);
  // //   this.focusInput(charIdx, colIdx);
  // // }
  
  // shiftFocusUp(charIdx:number, colIdx:number) {
  //   console.log("UP", colIdx, charIdx);
  //   charIdx = Math.max(0, charIdx - 1);
  //   this.focusInput(charIdx, colIdx);
  // }
  
  // shiftFocusLeft(charIdx:number, colIdx:number) {
  //   console.log("LEFT", charIdx, colIdx);
  //   colIdx = colIdx - 1 - this.columns.slice(0, colIdx).reverse().findIndex(c => c.editable);
  //   this.focusInput(charIdx, colIdx);
  // }
  
  // shiftFocusRight(charIdx:number, colIdx:number) {
  //   console.log("RIGHT", charIdx, colIdx);
  //   colIdx = colIdx + 1 + this.columns.slice(colIdx + 1).findIndex(c => c.editable);
  //   this.focusInput(charIdx, colIdx);
  // }]

  // highlight(e) {
  //   if (this.selected[0]) this.selected[0].className = '';
  //   e.target.parentNode.className = 'selected';
  // }
  //   table = document.getElementById('table');
  //   selected = this.table.getElementsByClassName('selected');
  

  }
 


