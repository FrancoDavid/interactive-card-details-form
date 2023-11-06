import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFrontComponent } from './components/card-front/card-front.component';
import { CardBackComponent } from './components/card-back/card-back.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyNumbersDirective } from './directives/only-numbers/only-numbers.directive';
import { FormatNumberCardDirective } from './directives/format-number-card/format-number-card.directive';
import { CardSuccessComponent } from './components/card-success/card-success.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFrontComponent,
    CardBackComponent,
    CardFormComponent,
    OnlyNumbersDirective,
    FormatNumberCardDirective,
    CardSuccessComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
