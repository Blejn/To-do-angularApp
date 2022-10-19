import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *,* => void', [animate(1000)]),
    ]),
    trigger('fade1', [
      state('void', style({ opacity: 0 })),
      transition('void => *,* => void', [animate(3000)]),
    ]),
    trigger('fade2', [
      state('void', style({ opacity: 0 })),
      transition('void => *,* => void', [animate(5000)]),
    ]),
  ],
})
export class MainPageComponent implements OnInit {
  backgroundImage: string;

  constructor() {
    this.backgroundImage = 'assets/background.jpg';
  }

  ngOnInit(): void {}
}
