import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
    @Input() hero: Hero= {
      id:1,
      name:"a",
      class:"a",
      level:1
    };
  constructor() { }

  ngOnInit(): void {
  }

}
