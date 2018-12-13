import { Pipe, PipeTransform } from '@angular/core';
import { Message } from './message.service';

@Pipe({
  name: 'messageCustom'
})
export class MessageCustomPipe implements PipeTransform {

  transform(value: Message, header?: string): string {
    return `[${header || value.getLevel()}] : ` + value.getMessage()
  }

}
