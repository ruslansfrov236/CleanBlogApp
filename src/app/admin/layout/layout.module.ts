import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { loadavg } from 'os';
import { RouterModule } from '@angular/router';
import {ComponentModule} from './component/component.module'
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule, ComponentModule , RouterModule, MatSidenavModule
  ],
  providers:[LayoutComponent]
})
export class LayoutModule { }
