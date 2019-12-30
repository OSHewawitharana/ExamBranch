import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ValidateService } from '../../services/validate.service'; 
import { ExamService } from '../../services/exam.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { AuthService } from '../../services/auth.service';
import { SubjectService } from '../../services/subject.service';
import { Router,ActivatedRoute,Params } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-repeat-registratoins-view',
  templateUrl: './repeat-registratoins-view.component.html',
  styleUrls: ['./repeat-registratoins-view.component.css']
})
export class RepeatRegistratoinsViewComponent implements OnInit {

  subjectlist=[];
  // user={};

  constructor(
    private fb: FormBuilder,
    private ngFlashMessageService: NgFlashMessageService,
    private validateService:ValidateService,
    private router:Router,
    private examService:ExamService,
    private enrollmentService:EnrollmentService,
    private subjectService:SubjectService,
    private authService:AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    const user = this.authService.loadUser();
    console.log(user.uniId);
    this.enrollmentService.getRepeatRegistration(user.uniId).subscribe(data => {
      this.subjectlist = data.subjectlist;
      console.log(data.subjectlist);
    },
    err => {
      console.log(err);
      return false;
    });
  
  }

}
