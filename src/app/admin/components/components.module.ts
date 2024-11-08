import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { MessageModule } from './message/message.module';
import { HeaderModule } from './header/header.module';
import { ContactsModule } from './contacts/contacts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    PostsModule,
    MessageModule,
    ContactsModule,
    HeaderModule,
    RouterModule,
  ],
 
})
export class ComponentsModule { }
