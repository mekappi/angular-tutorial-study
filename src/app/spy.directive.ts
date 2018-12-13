import { Directive, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from './message.service';

let nextId = 1;

@Directive({ selector: '[logSpy]' })
export class SpyDirective implements OnInit, OnDestroy {

    id: number;

    constructor(private message: MessageService) { 
    }

    ngOnInit() { this.logIt(`spy onInit`); }

    ngOnDestroy() { this.logIt(`spy onDestroy`); }

    private logIt(msg: string) {
        this.message.add(`Spy #${nextId++} ${msg}`);
    }

}