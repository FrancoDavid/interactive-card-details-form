import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/types/card.type';

@Component({
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.css']
})
export class CardFrontComponent implements OnInit {

  public card: Card;

  constructor(private _cardService: CardService) {
    this.card = {
      name: '',
      number: '0000 0000 0000 0000',
      month: '00',
      year: '00000',
      cvc: '000'
    };
  }

  ngOnInit(): void {
    this._cardService.cardState$
      .subscribe(card => {
        this.card = {
          name: card?.name || '',
          number: card?.number || '0000 0000 0000 0000',
          month: card?.month || '00',
          year: card?.year || '0000',
          cvc: card?.cvc || '000'
        };
      });
  }

}