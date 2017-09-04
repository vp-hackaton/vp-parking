import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    console.log('Hello');
  }

  heroForm = new FormGroup ({
    name: new FormControl()
  });

  login(){
    console.log("Hola; " + name);
  }
}
