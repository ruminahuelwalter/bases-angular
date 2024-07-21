import { Component } from '@angular/core';
import { ListComponent } from "../components/list/list.component";
import { AddCharacterComponent } from "../components/add-character/add-character.component";
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';


@Component({
    standalone: true,
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    imports: [ListComponent, AddCharacterComponent]
})

export class MainPageComponent  {
 
    constructor( public dbzService:DbzService ){}

}