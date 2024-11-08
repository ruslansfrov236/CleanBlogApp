import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DeleteDirectiveModule } from '../../../directive/delete-directive.module';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [AboutComponent, ListComponent, CreateComponent, EditComponent],
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
      {path:"", component:AboutComponent},
      { path: 'edit/:id', component: EditComponent }

    ])
  ]
})
export class AboutModule { }
