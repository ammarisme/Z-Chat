import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserChat } from "../../shared/UserChat.model";
import { User } from "../../shared/User.model";
import { Message } from "../../shared/message.model";

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {
  @Input()  user : User ;
  @Output() sendMessageClickEvent = new  EventEmitter<Message>()

  currentMessage:string;
  chattingUser:User;
  constructor() { }

  ngOnInit() {
  }

  sendMessageClicked(){
    this.sendMessageClickEvent.emit(new Message(this.currentMessage , this.user.userName,this.user.userName));
  }

}
