import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [PostsComponent, ListComponent, CreateComponent],
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
    RouterModule.forChild([
      {path:"" , component:PostsComponent}
    ])

  ]
  
})
export class PostsModule { }
