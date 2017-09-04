import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  heroForm = new FormGroup ({
    name: new FormControl(),
    password: new FormControl()
  });

  isLoggin = '';

  constructor(private auth: AuthenticationService) {
       localStorage.clear();

   }

  ngOnInit() {  }


  onClickMe(userInfo) {
    this.auth.login(userInfo.name, "");
  }

}
