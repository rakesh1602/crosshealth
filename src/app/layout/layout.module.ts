import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,

    //Material Module
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule
   

  ],
  exports: [
    HeaderComponent,
    LandingComponent
  ]
})
export class LayoutModule { }
