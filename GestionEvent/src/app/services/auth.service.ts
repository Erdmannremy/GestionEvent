import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected :boolean = true

  login() {
    this.isConnected = true
          }
  logout(){
   this.isConnected = false
          }

}
