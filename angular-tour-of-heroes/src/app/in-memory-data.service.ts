import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', class: 'paladin', level: 27 },
      { id: 13, name: 'Bombasto', class: 'mage', level: 42 },
      { id: 14, name: 'Celeritas', class: 'warrior', level: 1 },
      { id: 15, name: 'Magneta', class: 'priest', level: 100 },
      { id: 16, name: 'RubberMan', class: 'hunter', level: 14 },
      { id: 17, name: 'Dynama', class: 'paladin', level: 76 },
      { id: 18, name: 'Dr. IQ', class: 'hunter', level: 57 },
      { id: 19, name: 'Magma', class: 'warriror', level: 7 },
      { id: 20, name: 'Tornado', class: 'priest', level: 97 }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
