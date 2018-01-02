import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpRequest } from "selenium-webdriver/http";
import { User } from "../shared/User.model";
import { Http } from "@angular/http";
import { HubConnection } from '@aspnet/signalr-client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User ;
  url = "";
  private hubConnection: HubConnection;
  nick = '';
  message = '';

  messages: string[] = [];
  constructor(private http: Http) {
  }

  firstName :string;
  lastName: string;
  email : string;
  passwod : string;
  confirmPassword: string;

    ngOnInit() {
      // this.nick = window.prompt('Your name:', 'John');
      
      //     this.hubConnection = new HubConnection('http://localhost:52527');

      //     this.hubConnection.start()
      //                .then(() => {
      //                    console.log('Hub connection started')
      //                })
      //                .catch(err => {
      //                    console.log(err)
      //                });
      }
    
    register(){
    }
}