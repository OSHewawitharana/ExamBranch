import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
// import ' rxjs/add/operator/map';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
adminToken: any;
admin:any;

  constructor(
    private http:Http,
  ) { }

  registerAdmin(admin){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admins/registerAdmin',admin,{headers:headers})
      .pipe(map(res => res.json()));

  }

  authenticateAdmin(admin){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admins/authenticateAdmin',admin,{headers:headers})
      .pipe(map(res => res.json()));

  }

//   getProfile(){
//     const headers = new Headers();
//     this.loadToken();
//     headers.append('Authorization', this.adminToken);
// //  headers.append('Content-Type', 'application/json');
//     // headers.append('Authorization',this.authToken);
//     // headers.append('Authorization',this.authToken);
//     headers.append('Content-Type', 'application/json');
//     return this.http.get('http://localhost:3000/admins/profile',{headers:headers})
//       .pipe(map(res => res.json()));

//   }

  storeAdminData(token,admin){
    localStorage.setItem('id_token',token);
    localStorage.setItem('admin',JSON.stringify(admin));
    this.adminToken = token;
    this.admin = admin; 
  }

loadToken(){
  const token = localStorage.getItem('id_token');
  this.admin = token;
}

Logout(){
  this.adminToken = null;
  this.admin = null;
  localStorage.clear();
}

loggedIn(){ 
    if (localStorage.id_token == undefined ){ 
      return true 
    }  else { 
      const helper = new JwtHelperService(); 
      //console.log(helper.isTokenExpired(localStorage.id_token)); 
      return helper.isTokenExpired(localStorage.id_token); 
    }

}








}