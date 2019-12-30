import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ValidateService } from '../../services/validate.service'; 
import { ExamService } from '../../services/exam.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { AuthService } from '../../services/auth.service';
import { SubjectService } from '../../services/subject.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-repeat-exams',
  templateUrl: './repeat-exams.component.html',
  styleUrls: ['./repeat-exams.component.css']
})
export class RepeatExamsComponent implements OnInit {

user=[];

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

  ngOnInit() {
    // this.router.navigate(['/registerRepeat']); 
      
     
  }

}
