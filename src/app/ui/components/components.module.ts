import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from './posts/posts.module';
import { HeaderModule } from '../../admin/components/header/header.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsModule,
   
    HomeModule,
    ContactModule,
    AboutModule
  ]
})
export class ComponentsModule { }
