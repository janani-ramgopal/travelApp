import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule, ButtonsModule, WavesModule, InputsModule, CheckboxModule, DropdownModule, IconsModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { PlanMyJourneyComponent } from './plan-my-journey/plan-my-journey.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import{CountriesJson} from '../assets/JSON/countries-json';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
@NgModule({
  exports:[MatSelectModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule],
  declarations:[],
  schemas:[NO_ERRORS_SCHEMA]
})

export class MaterialModule{}
@NgModule({
  declarations: [
    AppComponent,
    ApplyNowComponent,
    PlanMyJourneyComponent,
    ManageBookingComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    CardsModule,MaterialModule,
    ButtonsModule,WavesModule,InputsModule,CheckboxModule,ReactiveFormsModule,FormsModule,DropdownModule.forRoot(),
    AppRoutingModule,BrowserModule,BrowserAnimationsModule,IconsModule 
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
