import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { DeleteDirectiveModule } from '../directive/delete-directive.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule , 
    LayoutModule,
    ComponentsModule,
    DeleteDirectiveModule
  ]
})
export class AdminModule { }
