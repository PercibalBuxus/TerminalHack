import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TerminalHack';
  public outputMsg: String;
  private listen: Boolean;
  private changeText = '';
  private showTerminal = true;

}
