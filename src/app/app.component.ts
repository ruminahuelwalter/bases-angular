import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { CounterComponent } from './counter/components/counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@Component({  selector: 'app-root',
    standalone: true,
    imports: [
      CounterModule,
      HeroesModule,
      RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
export class AppComponent {
  public title: string = 'Hola Mundo';
 
}
