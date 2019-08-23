import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { heross } from "./heroes/moke-heroes";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /*getHeroes(): Hero[] {
    return heross;
  }*/

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(heross);
  }

  getMessage(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(heross);
  }


  constructor(private messageService: MessageService) { }
}
