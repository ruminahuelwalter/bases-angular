import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
    declarations:[],
    imports:[HeroComponent, ListComponent],
    exports:[HeroComponent, ListComponent]
})

export class HeroesModule{}