import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-character',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacterHijo: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }


  emitCharacter():void{
    //debugger;

    console.log(this.character)
    if (this.character.name.length === 0) return;
    this.onNewCharacterHijo.emit(this.character);
    this.character = {name:'', power: 0};
    //this.character.name = '';
    //this.character.power = 0;
  }
}
