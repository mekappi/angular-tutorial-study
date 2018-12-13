import { Component, OnInit } from '@angular/core';
import { Observable, observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

  messages : number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log("exec onclick")
    let observable : Observable<Number> = of(1,2,3);
    const observer = {
      next: v => {
        console.log(`next method exec ${v}`);
        this.messages.push(v);
      },
        error: err => console.log(`error method exec ${err}`),
          complete: () => console.log(`complete method exec`)
    };
    observable.subscribe(observer);
  }

}
