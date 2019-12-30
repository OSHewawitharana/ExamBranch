import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
// import ' rxjs/add/operator/map';
// import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectToken: any;
  subject:any;
  

  constructor(
    private http:Http,
  ) { }

addSubject(subject){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/subjects/addSubject',subject,{headers:headers})
  .pipe(map(res => res.json()));
};

getSubjectsByYear(year){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getSubjectsByYear/'+year,{headers:headers})
    .pipe(map(res => res.json()));
}

getAllSubjects(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getAllSubjects/',{headers:headers})
    .pipe(map(res => res.json()));
}


getFisrtYearUndergraduateSubjects(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getFisrtYearUndergraduateSubjects',{headers:headers})
    .pipe(map(res => res.json()));
}


getSecondYearUndergraduateSubjects(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getSecondYearUndergraduateSubjects',{headers:headers})
    .pipe(map(res => res.json()));
}


getThirdYearUndergraduateSubjects(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getThirdYearUndergraduateSubjects',{headers:headers})
    .pipe(map(res => res.json()));
}

getFourthYearUndergraduateSubjects(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getFourthYearUndergraduateSubjects',{headers:headers})
    .pipe(map(res => res.json()));
}

searchSubject(searchsubject){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/subjects/searchSubjects',searchsubject,{headers:headers})
    .pipe(map(res => res.json()));
}


getSubjectsBySemesterAndYear(year,semester,userType){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getSubjectsBySemesterAndYear/' + year + '/' + semester+'/'+userType,{ headers: headers })
    .pipe(map(res => res.json()));
}

getSubjectsByStudentTypeAndYear(year,studentType){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://localhost:3000/subjects/getSubjectsByStudentTypeAndYear/' + year + '/' + studentType, { headers: headers })
    .pipe(map(res => res.json()));
}

}


