import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LiveretailProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LiveretailProvider {
  private baseApiPath = "http://localhost:50639";
  constructor(public http: Http) {
    console.log('Hello LiveretailProvider Provider');
  }

  getDadosVendas(){
    return this.http.get("http://localhost:50639/api/dados/venda");
  }


}
