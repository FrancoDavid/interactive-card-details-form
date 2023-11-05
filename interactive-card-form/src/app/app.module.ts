import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFrontComponent } from './components/card-front/card-front.component';
import { CardBackComponent } from './components/card-back/card-back.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFrontComponent,
    CardBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
