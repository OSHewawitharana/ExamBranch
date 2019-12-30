import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import {AdminService} from '../../../services/admin.service';
import { ExamService } from '../../../services/exam.service';
import { AuthService } from '../../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  examination: String;
  deadline: String;
  title: String;
  studentType: String;
  year: String;
  description: String;
  date: String;
  id: String;
  semester:String;


  constructor(
    private validateService: ValidateService,
    private examService: ExamService,
    private adminService: AdminService,
    private authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onExamSubmit() {


    const exam = {
      examination: this.examination,
      deadline: this.deadline,
      title: this.title,
      studentType: this.studentType,
      year: this.year,
      description: this.description,
      date: this.date,
      semester:this.semester
    }



    if (!this.validateService.validateExam(exam)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Please fill Requied Fields"],
        dismissible: true,
        timeout: 6000,
        type: 'danger'
      });
      return false;
    }


    this.examService.addExam(exam).subscribe(data => {
      if (data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Success"],
          dismissible: true,
          timeout: 5000,
          type: 'success'
        });
        this.router.navigate(['/createexam']);
      } else {
        // console.log('here test');

        this.ngFlashMessageService.showFlashMessage({
          messages: ["Something went wrong"],
          dismissible: true,
          timeout: 5000,
          type: 'danger'
        });
        this.router.navigate(['/createexam']);
      }
    });


  }

}