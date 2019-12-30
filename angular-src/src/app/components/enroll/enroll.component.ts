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
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  // public enrollForm: FormGroup;

  checked: false;
  user:object;
  fullname:String;
  exam:{};
  subject = {};
  subjects : Array<Object>;
  subjectlist: any;
  id:String;
  year:String;
  course:String;
  enrollment:{};
  indexno:String;
  subjectId:String;
  subjectName1:String;
  date:String;
  examname:String;
examination:String;
semester:String;
studentType:String;
noofsubjects:Number;
checkedCodeList = [];
  checkedNameList = [];
  c:any[] = [];
  length=Number;


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
  ) {
    
   }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.year = params['year'];
    //   this.semester=params['semester'];
      
      
      //console.log(this.id);
    // });
   this.semester =  this.route.snapshot.params['semester']
   this.year =  this.route.snapshot.params['year']
   this.examination =  this.route.snapshot.params['examination']
    this.examname = this.year + ' year '   + this.examination;
    const user = this.authService.loadUser();
console.log(this.examname);

  this.subjectService.getSubjectsBySemesterAndYear(this.route.snapshot.params['year'],this.route.snapshot.params['semester'],user.userType,).subscribe(data => {
    this.subjectlist = data.subjectlist;
  },
  err => {
    console.log(err);
    return false;
  });


  //  this.subjectService.getSubjectsByStudentTypeAndYear(this.route.snapshot.params['year'],this.route.snapshot.params['studentType']).subscribe(data => {
  //   this.subjectlist = data.subjectlist;
  //   console.log(data.subjectlist);
    
  // },
  // err => {
  //   console.log(err);
  //   return false;
  // });
   
    // this.authService.getProfile().subscribe(profile => {
    //   this.user = profile.user;
    //  },
    //  err => {
    //    console.log(err);
    //    return false;   
    //  });
     this.user = this.authService.loadUser();
    }

     check(code, name) {
      if (this.checkedCodeList.includes(code)) {
        this.checkedCodeList = this.checkedCodeList.filter(function (el) {
          return el !== code;
        });
        this.checkedNameList = this.checkedNameList.filter(function (el) {
          return el !== name;
        });
        // console.log(this.checkedNameList);
        // console.log(this.checkedCodeList);
      } else if (!this.checkedCodeList.includes(code)) {
        this.checkedNameList.push(name);
        this.checkedCodeList.push(code);
        // console.log(this.checkedCodeList);
        // console.log(this.checkedNameList);
      }


    }
    // this.registrationForm = this.fb.group({
    //   field: [''],
    //   indexno: [{value :this.data.user.indexno, disabled : true}],
    //   regno: [{value :this.data.user.regno, disabled : true}],
    //   name: [''],
    //   contact: ['',[Validators.required,Validators.minLength(10)]],
    //   email: ['',Validators.required],
    //   year: [''],
    //   subjects: ['']
    // });





      // this.enrollForm = this.fb.group({
      //   uniId:this.uniId,
      //   semester:this.semester,
      //   noofsubjects:this.noofsubjects,
      //   subjects: ['']
      // });



    
    


    onEnroll(){

      // const array1 ={
        const user = this.authService.loadUser();
      //   subjects :this.checkedCodeList


      // }
      // this.enrollmentService.addEnrollment(array1).subscribe(data => {

      //   if(!data.success){

      //     console.log("failed");
          

      //   }else{
      //     console.log("passed");
          
      //   }
      // });

      for (let i = 0; i < this.checkedCodeList.length; i++) {
        this.c[this.c.length] = {'code': this.checkedCodeList[i], 'subject': this.checkedNameList[i]};
      }

      console.log(this.c);
      

      const enrollment = {
       
        indexno:this.indexno,
        uniId:user.uniId,
        subjects:this.c,
        noofsubjects:this.noofsubjects,
        date:new Date(),
        examname:this.examname
       }
     console.log(enrollment.subjects);
      
      // // if(!this.validateService.validateSubject(subject)){
      // //   this.ngFlashMessageService.showFlashMessage({
      // //    messages: ["Please fill Requied Fields"], 
      // //     dismissible: true, 
      // //     timeout: 6000,
      // //     type: 'danger'
      // //   });
      // //   return false;
      // // }

      if(this.checkedCodeList.length==this.noofsubjects){
      
      
      this.enrollmentService.addEnrollment(enrollment).subscribe(data => {
        // console.log(JSON.parse(data['_body']));
        if (JSON.parse(data['_body']).success) {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["You have successfully registered."],
            dismissible: true,
            timeout: 5000,
            type: 'success'
          });
          // console.log("here1")
          // this.router.navigate(['/createexam']);
        } else {
          // console.log('here test');
  
          this.ngFlashMessageService.showFlashMessage({
            messages: ["Something went wrong"],
            dismissible: true,
            timeout: 5000,
            type: 'danger'
          });
          // this.router.navigate(['/createexam']);
        }
      });
  
    }else{
      this.ngFlashMessageService.showFlashMessage({
        messages: ["No of Subject Field is not matched with the selected number of Subjects"],
        dismissible: true,
        timeout: 5000,
        type: 'danger'
      });
    }



      
  
  
    }
    
}








  
 


  

  

