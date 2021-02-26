import { Injectable } from '@angular/core';
import { Team } from './Team';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teams : Team[] = [
    new Team(1, 'INTZ', 'gray'),
    new Team(2, 'PAIN', 'crimson'),
    new Team(3, 'KABUM', 'orange'),
    new Team(4, 'RED', 'red'),
    new Team(5, 'FLAMENGO', 'darkred'),
    new Team(6, 'CRUZEIRO', 'blue'),
    new Team(7, 'FURIA', 'black'),
    new Team(8, 'LOUD', 'lime'),
    new Team(9, 'VORAX', 'purple'),
    new Team(10, 'RENSGA', 'yellow'),
  ];

  constructor() { }
}
