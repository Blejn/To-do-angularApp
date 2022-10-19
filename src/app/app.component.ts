import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Task } from 'src/interfaces/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: { [key: string]: string } | null | boolean = null;

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2022-11-02',
      description: '',
      done: false,
    },
    {
      name: 'Programowanie',
      deadline: '2022-11-02',
      description: '',
      done: false,
    },
    {
      name: 'Zajęcia z tańca',
      deadline: '2022-11-02',
      description: '',
      done: false,
    },
  ];

  getDate(): Date {
    return new Date();
  }

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'LISTA ZADAŃ',
        footer: '@ Lista zadań zbudowana w Angularze',
        date: new Date().toDateString(),
      };
    }, 500);
  }
}
