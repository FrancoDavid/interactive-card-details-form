import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/types/card.type';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {

  @Output() finish: EventEmitter<void>;

  public cardForm: FormGroup;
  public isSubmitted: boolean;

  constructor(private _formBuiler: FormBuilder,
              private _cardService: CardService) {
    this.cardForm = this._formBuiler.group({
      nameCard: ['', Validators.required],
      numberCard: ['', [Validators.required, Validators.minLength(19)]],
      monthCard: ['', [Validators.required, Validators.minLength(2)]],
      yearCard: ['', [Validators.required, Validators.minLength(4)]],
      cvcCard: ['',[Validators.required, Validators.minLength(3)]]
    });
    this.isSubmitted = false;

    this.finish  = new EventEmitter<void>(false);
  }

  public onSubmit(): void {

    this.isSubmitted = true;

    if (this.cardForm.invalid) {
      return;
    }

    this.finish.emit();
  }

  public onWrite(): void {
    this._cardService.emitterCard({
      name: this.cardForm.controls['nameCard'].value,
      number: this.cardForm.controls['numberCard'].value,
      month: this.cardForm.controls['monthCard'].value,
      year: this.cardForm.controls['yearCard'].value,
      cvc: this.cardForm.controls['cvcCard'].value
    });
  }
}
