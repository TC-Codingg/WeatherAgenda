import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { AppModule } from '../app.module';
import { LayoutModule } from '../layout/layout.module';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [InfoComponent, MainComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    RouterModule
    
  ],
  exports: [
    InfoComponent,
    MainComponent,
  ]
})
export class PagesModule { }
