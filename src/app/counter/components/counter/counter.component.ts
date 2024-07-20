import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-counter',
    template: `
    <h3>
        {{ counter }}
    </h3>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(1)">+1</button>
    `,
    styles: `
        button {
            transition-duration: 0.4s;
            background-color: rgb(27, 151, 64);
            width: 60px;
            height: 40px;
            margin: 5px;
            border-radius: 12px;
        
          }
      
          button:hover {
            background-color: #04AA6D; /* Green */
            color: white;
          }
      
          button:hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
          }
    `
})

export class CounterComponent  {
    constructor() { }

    public counter: number = 10;

    increaseBy(value: number): void {
      this.counter += value;
    }

    decreaseBy(value: number): void {
      this.counter -= value;
    }

    resetCounter():void {
      this.counter = 10;
    }
}