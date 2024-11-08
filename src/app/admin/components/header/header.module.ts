import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDirectiveModule } from '../../../directive/delete-directive.module';



@NgModule({
  declarations: [HeaderComponent, ListComponent, CreateComponent],
  imports: [
    CommonModule,
    RouterLink,
    MatSidenavModule,
    MatButtonModule,
     MatDividerModule, 
     MatIconModule,
    MatFormFieldModule,
     MatInputModule,
      MatSelectModule,
      MatTableModule,
      MatSortModule ,
      ReactiveFormsModule,
      DeleteDirectiveModule,
    RouterModule.forChild([
      {path:"" , component:HeaderComponent}
    ])
  ]
})
export class HeaderModule { }
