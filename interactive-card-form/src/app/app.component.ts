import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public controlLayout: { isFinished: boolean };

  constructor() {
    this.controlLayout = {
      isFinished: false
    };
  }

  public onFinish(): void {
    this.controlLayout.isFinished = true;
  }

  public onContinue(): void {
    this.controlLayout.isFinished = false;
  }

}
