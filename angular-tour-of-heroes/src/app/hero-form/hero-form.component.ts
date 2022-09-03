import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CLASSES } from '../classes';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
    hero: Hero= {
      id:1,
      name:"a",
      class:"Priest",
      level:1
    };
    //classes: string[] = ['Priest','Hunter','Mage','Warrior'];
    classes : string[] = CLASSES;
  constructor() { }

  ngOnInit(): void {
  }

}
