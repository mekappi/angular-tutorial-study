import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: Message[] = [];

  addMessage(message: Message){
    this.messages.push(message);
  }

  add(message: string) {
    this.messages.push(new Message(message, MessageLevel.INFO));
  }

  clear() {
    this.messages = [];
  }
}

export class Message{
  constructor(private message: string, private level: MessageLevel){
  }

  public getMessage() : string{
    return this.message;
  }

  public getLevel(): MessageLevel {
    return this.level;
  }
}

export enum MessageLevel{
  INFO = "Info",
  WARN = "Warn",
  ERROR = "Error",
  SUCCESS = "Success",
}