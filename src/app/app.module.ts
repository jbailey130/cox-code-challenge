import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule, Http } from '@angular/http';
import { AppComponent }   from './app.component';
import { CalendarService } from '../services/calendar.service';
import { ModalDemoComponent } from './modal-demo.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports: [
    HttpModule, 
    BrowserModule,
    Ng2Bs3ModalModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    CalendarService 
  ]
})
export class AppModule { }
