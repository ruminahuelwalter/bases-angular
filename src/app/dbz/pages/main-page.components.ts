import { Component } from '@angular/core';
import { ListComponent } from "../components/list/list.component";
import { AddCharacterComponent } from "../components/add-character/add-character.component";
import { Character } from '../interfaces/character.interface';


@Component({
    standalone: true,
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    imports: [ListComponent, AddCharacterComponent]
})

export class MainPageComponent  {
  public characters: Character[] = [
    {
        name: 'Krillin',
        power: 1000
    },
    {
        name: 'Goku',
        power: 9500
    },
    {
        name: 'Vegeta',
        power: 7500
    }
];
  
}