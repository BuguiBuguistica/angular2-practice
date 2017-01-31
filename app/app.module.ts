import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EditListComponent }  from './list/edit.component';
import { CreateListComponent }  from './list/create.component';
import { ListComponent }  from './list/list.component';
import { routing } from './app.routes';
import { MdCoreModule } from '@angular2-material/core/core';
import { MdInputModule } from '@angular2-material/input/input';
import { MdButtonModule } from '@angular2-material/button/button';



@NgModule({
  imports:      [ BrowserModule, routing, MdCoreModule, MdInputModule, FormsModule, MdButtonModule],
  declarations: [ AppComponent, EditListComponent, CreateListComponent, ListComponent], 
  bootstrap:    [ AppComponent]
})
export class AppModule { }
