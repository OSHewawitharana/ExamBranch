import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {EnrollmentService} from '../../services/enrollment.service';
import {AuthService} from '../../services/auth.service';
import {SubjectService} from '../../services/subject.service';
import { NgFlashMessageService } from 'ng-flash-messages'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-register-repeat',
  templateUrl: './register-repeat.component.html',
  styleUrls: ['./register-repeat.component.css']
})
export class RegisterRepeatComponent implements OnInit {

  fullname:String;
  indexno:String;
  userType:String;
  year:String;
  semester:String;
  course:String;
  subjects:String;



  constructor(
    private validateService:ValidateService,
    private subjectService:SubjectService,
    private enrollmentService:EnrollmentService,
    private authService:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const repeatRegistration = {
      fullname:this.fullname,
      indexno:this.indexno,
      // userType:this.userType,
      year:this.year,
      semester:this.semester,
      course:this.course,
      subjects:this.subjects
    }

    // if(!this.validateService.validateRegister(user)){
    //   this.ngFlashMessageService.showFlashMessage({
    //    messages: ["Please fill Requied Fields"], 
    //     dismissible: true, 
    //     timeout: 6000,
    //     type: 'danger'
    //   });
    //   return false;
    // }

  
    
    this.enrollmentService.addRepeatRegistration(repeatRegistration).subscribe(data => {
      if(data['success']) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["User registered Successfully"], 
         dismissible: true, 
         timeout: 5000,
         type: 'success'
       });  
     
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Something went wrong"], 
         dismissible: true, 
         timeout: 5000,
         type: 'danger'
       });  
      
      }
    });
  }
}
