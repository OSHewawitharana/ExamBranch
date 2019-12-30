import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AdminService} from '../../services/admin.service';
import {AuthService} from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email   : String;
password:String;
user1:{};

  constructor(
    private validateService:ValidateService,
    private ngFlashMessageService: NgFlashMessageService,
    private authService:AuthService,
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit() {
  }


  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        console.log(data)
        this.authService.storeUserData(data.token,data.user);
        this.ngFlashMessageService.showFlashMessage({
          messages: ["User Successfully logged in"], 
         dismissible: true, 
         timeout: 5000,
         type: 'success'
       });  

       const user1 = this.authService.loadUser();
      //  console.log(data.userType);
       if(user1.userType=="admin"){
       this.router.navigate(['/adminDashboard']); 
      
       } else{
        console.log(data.userType);
        this.router.navigate(['/dashboard']); 
       }
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Wrong credentials. Check your username and password once again"], 
         dismissible: true, 
         timeout: 5000,
         type: 'danger'
       });  
       this.router.navigate(['/login']); 
      }  
    })
  }

 

}
