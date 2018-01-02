import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loggedIn = new EventEmitter();
  @Output() registerClicked  = new EventEmitter();
  userName : string;
  password : string;
  constructor() { }


  ngOnInit() {  
  }

  //Check with the server, change status to home if success
  onLoginClicked(){
    this.loggedIn.emit();
  }
  onRegisterClicked(){
    this.registerClicked.emit();
  }
}
