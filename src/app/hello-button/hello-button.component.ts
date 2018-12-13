import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hello-button',
  templateUrl: './hello-button.component.html',
  styleUrls: ['./hello-button.component.css']
})
export class HelloButtonComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onClickMe(){
    this.messageService.add("on Click Me!!!");
  }

}
