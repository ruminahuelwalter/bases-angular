import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // Evento que emite el indice 
  //onDelete = Index value: number
@Output()
//public onDeleteHijo: EventEmitter<number> = new EventEmitter()

public onDeleteHijo: EventEmitter<string> = new EventEmitter()

/*   onDeleteCharacter(index: number): void{
    //TODO: Emitir el ID del personaje
    console.log({ index });
    this.onDeleteHijo.emit(index)
  }
*/

onDeleteCharacter(id?: string): void{
    if (!id) return
    this.onDeleteHijo.emit(id)
  }
 
}
