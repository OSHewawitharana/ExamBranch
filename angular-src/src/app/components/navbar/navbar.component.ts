import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AdminService} from '../../services/admin.service';
import { NgFlashMessageService } from 'ng-flash-messages'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private authService:AuthService,
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.ngFlashMessageService.showFlashMessage({
      messages: ["You are logout"], 
     dismissible: true, 
     timeout: 5000,
     type: 'success'
   });  
   this.router.navigate(['/login']); 
   return false;
  }

}
