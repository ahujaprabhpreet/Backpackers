import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../shared/addToCart';
import { Cart } from '../shared/cartModel';
@Injectable()

export class removeFromCartService {
  searchURL = 'http://localhost:3000/api/cartupdated';
//   sp: SearchProduct;

  constructor(private http: HttpClient) {
  }

  

  remove(cartItem: Product): Promise<any>{
    let promise = new Promise((resolve, reject) => {
      this.http
      .post(this.searchURL,cartItem)
      .subscribe(data => {
        resolve(data);
        console.log("fr "+JSON.stringify(data))
      },
      error => {
        alert("No results found!");
      });
    });
    return promise;
  }
}
