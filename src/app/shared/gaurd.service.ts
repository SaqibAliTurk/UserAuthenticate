import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaurdService {

  userAuthorization(): boolean {
 
    const token = localStorage.getItem('auth-token');
    if (!token) {
      return false;
    }
    return true;
  }

  getToken() {
    return localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token');
  }
  
} 
