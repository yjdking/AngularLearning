import { Component, OnInit} from '@angular/core';
import { heross} from "./moke-heroes";

import { Hero, Row} from "./hero";
import { Rows } from './moke-heroes';

import { HeroService } from '../hero.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  page = 0;
  pageIndex = 0;
  heroes: Hero[];
  rowsTmp: Row[];
  // heroes: Hero[] = heross;
  hero: Hero = {
    id: 1,
    name: 'yjd'
  };
  selectedHero: Hero = this.hero;

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroess => this.heroes = heroess);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getIndex(tmp: number): void {
    this.pageIndex = tmp;
  }
  constructor(private heroService: HeroService) { }

  // 生命周期钩子，Angular 在创建完组件后很快调用ngOnInit,方初始化逻辑最好的地方
  ngOnInit() {
    this.getHeroes();
  }
}


