import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from "../../shared/User.model";

@Component({
  selector: 'app-incoming-user',
  templateUrl: './incoming-user.component.html',
  styleUrls: ['./incoming-user.component.css']
})
export class IncomingUserComponent implements OnInit {

  @Input() user : User;
  @Output() userClicked =  new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }

  incomingUserClicked(user:User){
    user.chatInitiated=true;    
    this.userClicked.emit(user);
  }

}
