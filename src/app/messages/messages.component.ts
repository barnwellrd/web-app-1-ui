import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { WebAppApiService } from '../web-app-api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
 
  messages: Message[] = [];
  constructor(private webAppApiService: WebAppApiService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.webAppApiService.getMessages().subscribe(messages => this.messages = messages);
    console.log(this.messages)
  }
  

}
