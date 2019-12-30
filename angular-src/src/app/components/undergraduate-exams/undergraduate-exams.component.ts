import { Component, OnInit } from '@angular/core';

import {ExamService} from '../../services/exam.service';
import { NgFlashMessageService } from 'ng-flash-messages'; 
// import {Router} from '@angular/router'; 
import {AuthService} from '../../services/auth.service';
import {AdminService} from '../../services/admin.service';
import { identity } from 'rxjs';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-undergraduate-exams',
  templateUrl: './undergraduate-exams.component.html',
  styleUrls: ['./undergraduate-exams.component.css']
})
export class UndergraduateExamsComponent implements OnInit {

  id:String;
  user:object;
  exam:object;
  examlist = [];
  year:String;

  constructor(
    private examService:ExamService,
    private authService:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
    private adminService:AdminService,
    private route: ActivatedRoute
  ) { }


  
  ngOnInit() {

    this.examService.getUndergraduateExams().subscribe(data => {
      this.examlist = data.exam;
    
    },
    err => {
      console.log(err);
      return false;
    });

    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
     },
     err => {
       console.log(err);
       return false;   
     });

  }

  onExamEnroll(year,semester,examination){
//      this.route.params.subscribe(params => {
//     this.year = params[year];
//     

// });
// console.log(semester);
    this.router.navigate(['/enroll/'+year+'/'+semester+'/'+examination]);
  }
 
}








