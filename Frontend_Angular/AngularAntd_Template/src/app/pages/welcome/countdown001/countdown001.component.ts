import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown001',
  templateUrl: './countdown001.component.html'
})
export class Countdown001Component {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}
