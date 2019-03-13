import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SelectedSlot } from '../container/cont';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  url: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // private containerUrl = 'http://localhost:8011/api/v1/bookedslot';
  // return this.http.get(this.containerUrl);
 constructor(
       private http: HttpClient) {
   }

 containerMethod(selectedSlot: SelectedSlot) {
   this.url = 'http://13.234.142.187:8011/api/v1/bookedslot';
   console.log('this method call', selectedSlot);
   return this.http.post(this.url, JSON.stringify(selectedSlot) , this.httpOptions);
 }
}
