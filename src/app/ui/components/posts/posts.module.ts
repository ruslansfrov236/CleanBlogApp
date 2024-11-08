import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:PostsComponent}
    ])
  ]
})
export class PostsModule { }
