import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ValidateService } from '../../services/validate.service'; 
import { ExamService } from '../../services/exam.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { AuthService } from '../../services/auth.service';
import { SubjectService } from '../../services/subject.service';
import { Router,ActivatedRoute,Params } from '@angular/router'; 



@Component({
  selector: 'app-second-year-subjects',
  templateUrl: './second-year-subjects.component.html',
  styleUrls: ['./second-year-subjects.component.css']
})
export class SecondYearSubjectsComponent implements OnInit {


  user:object;
  subject = {};
  subjectlist=[];
  subjectlist1=[];
  id:String;
  year:String;
  date:String;



  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private validateService:ValidateService,
    private router:Router,
    private examService:ExamService,
    private enrollmentService:EnrollmentService,
    private subjectService:SubjectService,
    private authService:AuthService,
    private route: ActivatedRoute
  ) { }

ngOnInit(){


  this.subjectService.getSecondYearUndergraduateSubjects().subscribe(data => {
    this.subjectlist1 = data.subjectlist1;
   
  },
  err => {
    console.log(err);
    return false;
  });
   


    }
    
}








  
 


  

  

