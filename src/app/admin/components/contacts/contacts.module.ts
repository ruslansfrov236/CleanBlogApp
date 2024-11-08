import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../../ui/components/contact/contact.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContactsComponent } from './contacts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [ContactsComponent, ListComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
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
    RouterModule.forChild([
      {path:"" , component:ContactsComponent},
      { path: 'edit/:id', component: EditComponent }

    ])
  ]
})
export class ContactsModule { }
