
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  createForm: FormGroup;

  constructor(private userService:UserService, private fb: FormBuilder, private router:Router ) { 
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactno: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registerUser(name, email, contactno, username, password){
    this.userService.addUser(name, email, contactno, username, password).subscribe(() => {
      alert("Registration Successful");
      this.router.navigate(['/homepage']);
    });
  }


  ngOnInit() {
    // this.userService.getUsers().subscribe((users) => {
    //   console.log(users);
    // })
  }

}
