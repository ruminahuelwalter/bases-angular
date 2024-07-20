import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [],
  imports: [
    AddCharacterComponent,
    CommonModule,
    ListComponent,
    MainPageComponent
  ],
  exports: [MainPageComponent]

})
export class DbzModule { }
