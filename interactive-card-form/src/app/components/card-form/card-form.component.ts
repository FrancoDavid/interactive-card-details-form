import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {

  public cardForm: FormGroup;
  public isSubmitted: boolean;

  constructor(private _formBuiler: FormBuilder) {
    this.cardForm = this._formBuiler.group({
      nameCard: ['', Validators.required],
      numberCard: ['', [Validators.required, Validators.minLength(19)]],
      monthCard: ['', [Validators.required, Validators.minLength(2)]],
      yearCard: ['', [Validators.required, Validators.minLength(4)]],
      cvcCard: ['',[Validators.required, Validators.minLength(3)]]
    });
    this.isSubmitted = false;
  }

  public get controls() {
    return this.cardForm.controls;
  }

  public onSubmit(): void {
    console.log('onSubmit');
    this.isSubmitted = true;

    console.log(this.controls);


    if (this.cardForm.invalid) {
      return;
    }
  }



}
