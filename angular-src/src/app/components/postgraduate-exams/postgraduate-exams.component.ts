import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../services/exam.service';
import { NgFlashMessageService } from 'ng-flash-messages'; 
import {Router} from '@angular/router'; 
import {AuthService} from '../../services/auth.service';
import {AdminService} from '../../services/admin.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-postgraduate-exams',
  templateUrl: './postgraduate-exams.component.html',
  styleUrls: ['./postgraduate-exams.component.css']
})

export class PostgraduateExamsComponent implements OnInit {

  id:String;
  user:object;
  exam:object;
  examlist = [];

  constructor(
    private examService:ExamService,
    private authService:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
    private adminService:AdminService
  ) { }

  
  ngOnInit() {

    this.examService.getPostgraduateExams().subscribe(data => {
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










