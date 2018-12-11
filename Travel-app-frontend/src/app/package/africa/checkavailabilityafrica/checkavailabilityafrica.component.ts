import { Component, OnInit } from '@angular/core';
import { Travel } from '../../../shared/addToCart';
import { TravelPackageDetail } from '../../../service/travelPackageDetail.service';
import { addToCartService } from '../../../service/addToCart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkavailabilityafrica',
  templateUrl: './checkavailabilityafrica.component.html',
  styleUrls: ['./checkavailabilityafrica.component.scss'],
  providers: [TravelPackageDetail, addToCartService]
})
export class CheckavailabilityafricaComponent implements OnInit {
  travelDetail: String;
  travelAdd: Travel;
  name = "";
  description = "";
  url = "";
  price = 0.0;
  inventorycount = 0;
  rating = 0;
  quantity;

  constructor(private travelPackageDetail: TravelPackageDetail, private _location: Location, private addToCart: addToCartService) { 
    this.travelPackageDetail=travelPackageDetail; 
  }

  ngOnInit() {
    this.travelPackageDetail.getProduct(localStorage.getItem("ProductId")).then(
      // console.log("vfvaf");
       data =>{
         var travelPackageDetails=JSON.parse(JSON.stringify(data));
         this.description = travelPackageDetails.description;
         this.name = travelPackageDetails.name;
         this.url = travelPackageDetails.imageurl;
         this.price = travelPackageDetails.price;
         this.inventorycount = travelPackageDetails.inventorycount;
         this.rating = travelPackageDetails.rating;
       }
     );
  }

  goBack(){
    this._location.back();
  }

  onSelectQty(qty){
    this.quantity = qty;
  }

  addtocart(){
    if(isNaN(this.quantity) || this.quantity==0) {
      alert("Please select quantity");
    }
    else{
    this.travelAdd = this.prepareAddToCart();
    alert("Product added successfully");
    this.addToCart.addToCart(this.travelAdd).then(
      product => { 
        alert("Product added successfully");
        }
      );
    }
  }

  prepareAddToCart(): Travel {
    const travel: Travel = {
      id: '',
      name: this.name as string,
      description: '',
      price: this.price as number,
      quantity: this.quantity as number,
      image: this.url as string
    };
    return travel;
  }

}
