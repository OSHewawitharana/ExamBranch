import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
// import ' rxjs/add/operator/map';
// import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class ExamService {

exam:any;

  constructor(
    private http:Http,
  ) { }

  addExam(exam){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/exams/addExam',exam,{headers:headers})
    .pipe(map(res => res.json()));
  }

  getAllExams() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/exams/allExams',{headers:headers})
      .pipe(map(res => res.json()));
      
  }

  getExam(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/exams/getExam/'+id,{headers:headers})
      .pipe(map(res => res.json()));
  }

  getUndergraduateExams(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/exams/getUndergraduateExams/',{headers:headers})
      .pipe(map(res => res.json()));
  }


  
  getPostgraduateExams(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/exams/getPostgraduateExams/',{headers:headers})
      .pipe(map(res => res.json()));
  }

}
