import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../types/card.type';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _cardBehavior: BehaviorSubject<Card>;

  constructor() {
    this._cardBehavior = new BehaviorSubject<Card>(null);
  }

  public emitterCard(card: Card): void {
    this._cardBehavior.next(card);
  }

  public get cardState$() {
    return this._cardBehavior.asObservable();
  }
}
