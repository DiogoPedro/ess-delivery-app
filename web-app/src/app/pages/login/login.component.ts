import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  formLogin;
  message;

  constructor(private formBuilder:FormBuilder) {

      this.buildForm();

  }

  buildForm(){

      this.formLogin = this.formBuilder.group({

          email: ['', Validators.required],
          password: ['', Validators.required],
      });

  }

  ngOnInit() {
  }

  login() {
    
  }

}
