import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
// import ' rxjs/add/operator/map';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  enrollment:any;
  
  constructor(
    private http:Http,

  ) { }


addEnrollment(enrollment){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/enrollments/addEnrollment/', enrollment, {headers:headers});
};


addRepeatRegistration(repeatRegistration){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/enrollments/addRepeatRegistration/', repeatRegistration, {headers:headers}).pipe(map(res => res.json()));
};


// getEnrollment(regno){
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   return this.http.post('http://localhost:3000/enrollments/getEnrollment/',regno, {headers:headers}).pipe(map(res => res.json()));
// };


// getEnrollment(){
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   return this.http.get('http://localhost:3000/enrollments/getEnrollment/', {headers:headers}).pipe(map(res => res.json()));
// }



getEnrollment(uniId){
  let headers = new Headers();
  
  headers.append('Content-Type', 'application/json');
  console.log(headers);
  return this.http.get('http://localhost:3000/enrollments/getEnrollment/'+uniId, {headers:headers}).pipe(map(res => res.json()));
  
}


getRepeatRegistration(uniId){
  let headers = new Headers();
  
  headers.append('Content-Type', 'application/json');
  console.log(headers);
  return this.http.get('http://localhost:3000/enrollments/getRepeatRegistration/'+uniId, {headers:headers}).pipe(map(res => res.json()));
  
}

}


