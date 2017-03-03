import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgModule }       from '@angular/core';
import { routing }        from './app.routing';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home';

@NgModule({
  imports: [
    BrowserModule,
    routing 
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    []
})
export class AppModule { }