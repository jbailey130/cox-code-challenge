import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ICalendar } from '../interfaces/ICalendar';
import { CalendarService } from '../services/calendar.service'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('validationModal')
  modal: ModalComponent;
  
  backdropOptions = [true, false, 'static'];
  cssClass: string = '';

  animation: boolean = true;
  keyboard: boolean = true;
  backdrop: string | boolean = true;

  calendar : ICalendar[];
  name : string = '';
  phoneNumber: string = '';
  selectedHour : ICalendar;

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarService.getCalendar().subscribe((res) => {
      this.calendar = res;
    })
  } 

    close() {
      this.selectedHour = null;
      this.name = '';
      this.phoneNumber = '';
      this.modal.close();
    }

    open(hour : ICalendar) {
      this.selectedHour = hour;
       if(this.selectedHour.reserved){
         this.name = this.selectedHour.name;
         this.phoneNumber = this.selectedHour.phoneNumber;
       }

      this.modal.open();
    }

    cancel(){
      this.selectedHour.name = '';
      this.selectedHour.phoneNumber = '';
      this.selectedHour.reserved = false
      this.modal.close();
    }

    save(){
      if(this.name && this.phoneNumber){
        this.selectedHour.name = this.name;
        this.selectedHour.phoneNumber = this.phoneNumber;
        this.selectedHour.reserved = true;

        this.selectedHour = null;
        this.name = '';
        this.phoneNumber = '';
      }

      this.modal.close();
    }

    closed() {
      this.selectedHour = null;
      this.name = '';
      this.phoneNumber = '';
    }

    dismissed() {
      this.selectedHour = null;
      this.name = '';
      this.phoneNumber = '';
    }

    opened() {
    }

    navigate() {
    }
}


