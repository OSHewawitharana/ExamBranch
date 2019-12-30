import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../services/exam.service';
import { NgFlashMessageService } from 'ng-flash-messages'; 
import {Router} from '@angular/router'; 
import {AuthService} from '../../services/auth.service';
import {AdminService} from '../../services/admin.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-upcoming-exams',
  templateUrl: './upcoming-exams.component.html',
  styleUrls: ['./upcoming-exams.component.css']
})
export class UpcomingExamsComponent implements OnInit {

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

    this.examService.getAllExams().subscribe(data => {
      this.examlist = data.examlist;
      
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
     
onExamEnroll(id) {

     this.router.navigate(['/enroll',id]);

 
}







}
