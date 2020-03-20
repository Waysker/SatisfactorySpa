import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ProductionComponent } from 'src/production/production.component';
import {ProductionComponent2} from 'src/production/production.component2';

@NgModule({
  declarations: [
    AppComponent,
    ProductionComponent,
    ProductionComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatSliderModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
