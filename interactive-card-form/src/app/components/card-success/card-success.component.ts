import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-success',
  templateUrl: './card-success.component.html',
  styleUrls: ['./card-success.component.css']
})
export class CardSuccessComponent {

  @Output() continue: EventEmitter<void>;

  constructor() {
    this.continue = new EventEmitter<void>();
  }

  public onContinue(): void {
    this.continue.emit();
  }

}
