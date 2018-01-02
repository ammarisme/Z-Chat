import { Component, OnInit } from '@angular/core';
import {  User } from "../shared/User.model";
import { UserChat } from "../shared/UserChat.model";
import { Message } from "../shared/message.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  incomingUsers : User[] = [new User('Ammar','',true),new User('Another User','',true), new User('Third User', '',false)];
  chatUsers : User[]= [new User('Ammar','',true), new User('Another','',true  )]

  chatList : UserChat[] = [];
  currentChatting: User;
  constructor() { 
    this.chatUsers[0].messages.push(new Message('a message', 'x' ,'y'));
    this.chatUsers[0].messages.push(new Message('a message', 'x' ,'y'));
    this.chatUsers[0].messages.push(new Message('a message', 'x' ,'y'));
    this.chatUsers[0].messages.push(new Message('a message', 'x' ,'y'));
    this.chatUsers[1].messages.push(new Message('a message', 'x' ,'y'));
  }

  ngOnInit() {
  }

  selectedChatUser(user : User){
    console.log(user);
    var userExist = false;
    this.chatUsers.forEach(chatUser => {
      if(chatUser.userName==user.userName){
        userExist = true;
        return;
      }
    });
    if(!userExist){
      this.chatUsers.push(user) ;
    }
  }

  sendMessage(message:Message){
    console.log(message);
  }
}
