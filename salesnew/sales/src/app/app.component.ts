import { Component, Input, ViewChild, Inject, HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Pipe} from '@angular/core';

import { NgModel } from '@angular/forms/src/directives/ng_model';
import {HotkeyModule, HotkeysService, Hotkey} from 'angular2-hotkeys';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
// import {Ng2PopupModule} from 'ng2-popup';










export class Medicine {
  constructor(public Item: String, public Batch: String, public Exp: String,public Qty :number,public Disc: number,public MRP :number,public S_Price: number,public Rate :number,public Amount :number,public Tax :number,public TaxAmt:number,public Totalamt: number) { }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  

})



@Pipe({name:'c'})
export class AppComponent {
  
  
  //selectedOption:Medicine;
// static  char: any;
//   static cols: any;
  inputs: any;
  columns: any;
  rows: any;
  displayedColumns = ['Item', 'Batch', 'Exp', 'Qty','Disc','MRP','S_Price','Rate','Amount','Tax','TaxAmt','Totalamt'];
  dataSource =  new MatTableDataSource(ELEMENT_DATA);
name:string;

  applyFilter(filterValue: string) {
    
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  
  

  medicineCtrl: FormControl;
  filteredMedicines: Observable<any>;
 

  medicines: Medicine[] = [
    {
     Item:'Paracetamol 1x',
     Batch:'tpara',
     Exp:'',
     Qty:10,
     Disc:0,
     MRP:18.75,
     S_Price:0,
     Rate:0,
     Amount:0,
     Tax:0,
     TaxAmt:0,
     Totalamt:0,


      },
      {
        Item:'Paracetamol 2x',
        Batch:'Paracenta1',
        Exp:'',
        Qty:10,
        Disc:0,
        MRP:18.75,
        S_Price:0,
        Rate:0,
        Amount:0,
        Tax:0,
        TaxAmt:0,
        Totalamt:0,
   
   
         },
         {
          Item:'Paracetamol',
          Batch:'Paracenta2',
          Exp:'',
          Qty:10,
          Disc:0,
          MRP:18.75,
          S_Price:0,
          Rate:0,
          Amount:0,
          Tax:0,
          TaxAmt:0,
          Totalamt:0,
     
     
           },
           {
            Item:'Paracetamol',
            Batch:'Paracenta2',
            Exp:'',
            Qty:8,
            Disc:0,
            MRP:18.75,
            S_Price:0,
            Rate:0,
            Amount:0,
            Tax:0,
            TaxAmt:0,
            Totalamt:0,
       
       
             },
             {
              Item:'Migranil',
              Batch:'Migranil1',
              Exp:'',
              Qty:9,
              Disc:0,
              MRP:18.75,
              S_Price:0,
              Rate:0,
              Amount:0,
              Tax:0,
              TaxAmt:0,
              Totalamt:0,
         
         
               },
               {
                Item:'Dolo',
                Batch:'Dolo1',
                Exp:'',
                Qty:5,
                Disc:0,
                MRP:18.75,
                S_Price:0,
                Rate:0,
                Amount:0,
                Tax:0,
                TaxAmt:0,
                Totalamt:0,
           
           
                 },
                 {
                  Item:'D-Acetadote',
                  Batch:'Acetadote1',
                  Exp:'',
                  Qty:10,
                  Disc:0,
                  MRP:18.75,
                  S_Price:0,
                  Rate:0,
                  Amount:0,
                  Tax:0,
                  TaxAmt:0,
                  Totalamt:0,
             
             
                   }
    ];

    
  constructor(private _hotkeysService: HotkeysService,public dialog: MatDialog) {
    this._hotkeysService.add(new Hotkey('ctrl+r', (event: KeyboardEvent): boolean => {
      location.reload();
      return false; 
  }));
  this._hotkeysService.add(new Hotkey('ctrl+c', (event: KeyboardEvent): boolean => {
    document.getElementById('customer').focus();
    return false;
}));
this._hotkeysService.add(new Hotkey('s', (event: KeyboardEvent): boolean => {
  document.getElementById('search').focus();
  return false;
  
  
}));



// this._hotkeysService.add(new Hotkey('d', (event: KeyboardEvent): boolean => {
//   document.getElementById('i').focus();
//   return false;
// }));
 


    this.medicineCtrl = new FormControl();
    this.filteredMedicines = this.medicineCtrl.valueChanges
      .pipe(
        startWith(''),
       (map(medicine => medicine ? this.filterMedicine(medicine) : this.medicines.slice())));
       
    }
    areThereItems: boolean = false;
    allItems: Medicine[] = [];
  
  filterMedicine(i: string) {
    return this.medicines.filter(
      function(c){
        return c.Item.toLowerCase().indexOf(i.toLowerCase()) > -1 ||
      c. Batch.toLowerCase().indexOf(i.toLowerCase())>-1 ;
      // || c.Qty.toLocaleString().indexOf(i.toLowerCase())> -1;
      })
    }
 
    openDialog() {
      this.dialog.open(DialogExampleComponent,{width:'150%',height:'50%',data:{}});
    }



  }



  


 

    
  
    

  
    export interface Element {
      Item: string;
      Batch: string;
      Exp: number;
      Qty: number;
      Disc: number;
      MRP: number;
      S_Price: number;
      Rate : number;
      Amount: number;
      Tax: number;
      TaxAmt:number;
      Totalamt:number; 
  
    }
     const  ELEMENT_DATA: Element[] = [
      // {
      //   Item:'Paracetamol 1x',
      //   Batch:'tpara',
      //   Exp:0,
      //   Qty:10,
      //   Disc:0,
      //   MRP:18.75,
      //   S_Price:0,
      //   Rate:0,
      //   Amount:0,
      //   Tax:0,
      //   TaxAmt:0,
      //   Totalamt:0,
   
   
      //    },
      //    {
      //      Item:'Paracetamol 2x',
      //      Batch:'Paracenta1',
      //      Exp:0,
      //      Qty:10,
      //      Disc:0,
      //      MRP:18.75,
      //      S_Price:0,
      //      Rate:0,
      //      Amount:0,
      //      Tax:0,
      //      TaxAmt:0,
      //      Totalamt:0,
      
      
      //       },
      //       {
      //        Item:'Paracetamol',
      //        Batch:'Paracenta2',
      //        Exp:0,
      //        Qty:10,
      //        Disc:0,
      //        MRP:18.75,
      //        S_Price:0,
      //        Rate:0,
      //        Amount:0,
      //        Tax:0,
      //        TaxAmt:0,
      //        Totalamt:0,
        
        
      //         },
      //         {
      //          Item:'Paracetamol',
      //          Batch:'Paracenta2',
      //          Exp:0,
      //          Qty:8,
      //          Disc:0,
      //          MRP:18.75,
      //          S_Price:0,
      //          Rate:0,
      //          Amount:0,
      //          Tax:0,
      //          TaxAmt:0,
      //          Totalamt:0,
          
          
      //           },
      //           {
      //            Item:'Migranil',
      //            Batch:'Migranil1',
      //            Exp:0,
      //            Qty:9,
      //            Disc:0,
      //            MRP:18.75,
      //            S_Price:0,
      //            Rate:0,
      //            Amount:0,
      //            Tax:0,
      //            TaxAmt:0,
      //            Totalamt:0,
            
            
      //             },
      //             {
      //              Item:'Dolo',
      //              Batch:'Dolo1',
      //              Exp:0,
      //              Qty:5,
      //              Disc:0,
      //              MRP:18.75,
      //              S_Price:0,
      //              Rate:0,
      //              Amount:0,
      //              Tax:0,
      //              TaxAmt:0,
      //              Totalamt:0,
              
              
      //               },
      //               {
      //                Item:'D-Acetadote',
      //                Batch:'Acetadote1',
      //                Exp:0,
      //                Qty:10,
      //                Disc:0,
      //                MRP:18.75,
      //                S_Price:0,
      //                Rate:0,
      //                Amount:0,
      //                Tax:0,
      //                TaxAmt:0,
      //                Totalamt:0,
                
                
      //                 }
  
     ];
    
    