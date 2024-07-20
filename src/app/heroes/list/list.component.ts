import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
public deletedHero?:string = '';
removeLastHero(): void{
  if (this.heroNames.length !== 0 ){
    this.deletedHero = this.heroNames.pop();
  }
}
}
