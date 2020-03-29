import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ProductionComponent } from 'src/production/production.component';
import {ProductionComponent2} from 'src/production/production.component2';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';

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
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
