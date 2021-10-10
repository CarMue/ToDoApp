import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ToDoDataService } from './services/to-do-data.service';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { SortDonePipe } from './pipes/sort-done.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ToDoListComponent, ToDoFormComponent, SortDonePipe ],
  bootstrap:    [ AppComponent ],
  providers:    [ ToDoDataService ]
})
export class AppModule { }
