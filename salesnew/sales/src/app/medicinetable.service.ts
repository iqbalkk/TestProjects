import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';


@Injectable()
export class MedicinetableService {

  constructor() { }
  getCharacters(): Observable<any[]>{
    return Observable.of(CHARACTERS).delay(100);
  }

getColumns(): string[]{
  return ["Item","Batch", "Exp", "Qty","Disc","MRP","S_Price","Rate","Amount","Tax","TaxAmt","Totalamt"]
}
}
