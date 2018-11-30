import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

//import { UserService } from '../../../services/user.service';
import { UserService } from "../shared/user.service";
import { User } from '../../user.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  users: User[];
  // displayedColumns = ['name', 'email', 'contactno', 'username', 'password'];

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    // this.fetchUsers();
   }
 
  //  fetchUsers(){
  //    this.userService
  //      .getUserProfile()
  //      .subscribe((data: User[]) => {
  //      this.users = data;
  //      console.log('Data Requested'); 
  //      console.log(this.users); 
 
  //  });
  //  }

}
