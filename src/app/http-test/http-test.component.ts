import { Component, OnInit } from '@angular/core';
import { HttpTestService } from '../http-test.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  constructor(private httpTestService: HttpTestService ) { }

  ngOnInit() {
  }

}
