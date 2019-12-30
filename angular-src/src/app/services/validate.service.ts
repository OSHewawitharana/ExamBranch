import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user){
     if(user.fullname ==undefined || user.email==undefined || user.password ==undefined || user.uniId == undefined || user.userType==undefined ){
       return false;
     } else {
       return true;
     }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email); 
  }



  validateExam(exam){
    if(exam.examination ==undefined || exam.deadline==undefined || exam.title ==undefined || exam.description == undefined ){
      return false;
    } else {
      return true;
    }
 }



 validateSubject(subject){
  if(subject.studentType ==undefined || subject.year==undefined || subject.course ==undefined || subject.subjectCode == undefined || subject.subjectName == undefined){
    return false;
  } else {
    return true;
  }
}

 

}
