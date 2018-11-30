import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient, private router: Router) { }

  //get all users
  getUsers() {
    return this.http.get(`${this.uri}/users`);
  }

  //add new user
  addUser(name, email, contactno, username, password) {
    const user = {
      name: name,
      email: email,
      contactno: contactno,
      username: username,
      password: password,
    };

    return this.http.post(`${this.uri}/users/register`, user);

  }

  login(username, password): Promise<any> {
    {
      const user = {
        username: username,
        password: password,
      };
      // console.log(userlogin);
      let promise = new Promise((resolve, reject) => {
        this.http.post(`${this.uri}/users/login`, user)
          .subscribe(data => {
            resolve(data);
            console.log(data);
            alert("Login Created");
          },
            error => {
              this.router.navigate(['/']),
                reject(error);
            });
      });
      return promise;

      // return this.http.post(`${this.uri}/users/login`, user);

    }
  }

  }