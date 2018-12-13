import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { Message, MessageLevel } from './message.service';

@Directive({
  selector: '[appMessageHighlight]'
})
export class MessageHighlightDirective extends HighlightDirective implements OnInit {

  @Input() message: Message;

  constructor(el: ElementRef) { 
    super(el);
  }

  ngOnInit(): void {
    console.log(this.message);
    this.highlightColor = this.message2Color(this.message);
    this.highlight(this.highlightColor);
  }

  private message2Color(message: Message): string {
    switch(message.getLevel()){
      case MessageLevel.INFO: return null;
      case MessageLevel.WARN: return 'yellow';
      case MessageLevel.ERROR: return 'red';
      case MessageLevel.SUCCESS: return 'lightgreen';
    }

    return null;
  }
}
