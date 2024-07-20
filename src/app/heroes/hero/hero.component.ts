import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45

  get capitalizeName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {
    
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 31;

  }
  
  reset():void{
    this.name= 'ironman'
    this.age = 45;

  }

}
