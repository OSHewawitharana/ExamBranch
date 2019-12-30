import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AdminService} from '../../services/admin.service';
// import { NgFlashMessageService } from 'ng-flash-messages'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:object;

  constructor(
    private adminService:AdminService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.user = this.authService.loadUser();
    // this.authService.getProfile().subscribe(profile => {
    //   console.log("hi")
    //   console.log(profile)
    //   console.log("<=user")
    //   this.user = profile.user;
    // },
    // err => {
    //   console.log(err);
    //   return false;
    // });
    // //onst user = this.authService.loadUser();
    // // console.log(user);
    
  }
}
