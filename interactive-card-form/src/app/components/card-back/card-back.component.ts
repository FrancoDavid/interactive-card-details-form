import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-back',
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.css']
})
export class CardBackComponent implements OnInit {

  public cvc: string;

  constructor(private _cardService: CardService) {
    this.cvc = '000';
  }

  ngOnInit(): void {
    this._cardService.cardState$
      .subscribe(card => this.cvc = card?.cvc || '000');
  }

}
