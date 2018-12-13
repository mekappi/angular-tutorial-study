import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-name',
  templateUrl: './hero-name.component.html',
  styleUrls: ['./hero-name.component.css']
})
export class HeroNameComponent{
  private _name = '';

  @Input() 
  set name(name: string){
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string{
    return this._name;
  }

}
