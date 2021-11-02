import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OnclickComponent } from './onclick/onclick.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OnclickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  // exports :[
  //   MatFormFieldModule,
  //   MatButtonModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
