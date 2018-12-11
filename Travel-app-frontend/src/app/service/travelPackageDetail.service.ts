import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TravelModel } from '../shared/travelModel';
@Injectable()

export class TravelPackageDetail {
  travelInfoURL = 'http://localhost:3000/api/productdetail';
  constructor(private http: HttpClient) {
  }
  getProduct(ptravelId:String): Promise<any> {
    // tslint:disable-next-line:prefer-const  
    let promise = new Promise((resolve, reject) => {
      this.http
      .get<TravelModel>(this.travelInfoURL+"/"+ptravelId)
      .subscribe(data => {
        resolve(data);
      },
      error => {
        reject(error);
      });
    });
    return promise;
  }
}
