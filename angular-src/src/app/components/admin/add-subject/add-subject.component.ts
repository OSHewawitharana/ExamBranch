import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../../services/validate.service';
import {AdminService} from '../../../services/admin.service';
import {AuthService} from '../../../services/auth.service';
import {SubjectService} from '../../../services/subject.service';
import { NgFlashMessageService } from 'ng-flash-messages'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {


  studentType:String;  
  year:String;
  course:String;
  subjectCode:String;
  subjectName:String;
  semester:String;


  constructor(
    private validateService:ValidateService,
    private subjectService:SubjectService,
    private adminService:AdminService,
    private authService:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {


  }


  onSubjectSubmit(){

    const subject = {
      studentType:this.studentType, 
      year:this.year,
      course:this.course,
      subjectCode:this.subjectCode,
      subjectName:this.subjectName,
      semester:this.semester
     }
    
    
    
    if(!this.validateService.validateSubject(subject)){
      this.ngFlashMessageService.showFlashMessage({
       messages: ["Please fill Requied Fields"], 
        dismissible: true, 
        timeout: 6000,
        type: 'danger'
      });
      return false;
    }
    
    
    this.subjectService.addSubject(subject).subscribe(data => {
      if(data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Success"], 
         dismissible: true, 
         timeout: 5000,
         type: 'success'
       });  
      //  this.studentType="";
      // this.year="";
      // this.course="";
      // this.subjectCode="";
      // this.subjectName="";
      // this.semester="";

       this.router.navigate(['/addSubject']); 
      } else {
        console.log('here test');
        
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Something went wrong"], 
         dismissible: true, 
         timeout: 5000,
         type: 'danger'
       });  
       this.router.navigate(['/addSubject']); 
      }
    });
    


  }

}
