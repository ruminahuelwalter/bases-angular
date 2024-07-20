import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

}
