// import { BuyComponent } from '../components/buy/buy.component';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class OnTrackService {
    url: any;
    response: any;
     cart;
    constructor(private http: HttpClient) {

    }
   Home() {

    this.url = 'http://13.233.3.91:8083/api/v1/products';
    console.log('this method call');
    return this.http.get(this.url);
}

openDailog() {
    this.url = 'http://13.233.3.91:8083/api/v1/products';
    return this.http.get(this.url);
}
AddToCart() {
    this.url = 'http://13.233.3.91:8083/api/v1/products';
    return this.http.get(this.url);
}
Buy() {

this.url = ' http://localhost:3000/slotsAvailable';


    return this.http.get(this.url);
}
profile() {
    this.url = 'http://localhost:8015/api/v1/user/';
    return this.http.get(this.url);
}
}
