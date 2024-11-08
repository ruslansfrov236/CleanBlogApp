import { Component, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreatePosts } from '../../../entities/create-posts';

@Component({
  selector: 'app-posts',
  standalone: false,

  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  @ViewChild(ListComponent) listComponent: ListComponent;


  createPost(createPost:CreatePosts){

    this.listComponent.getPost();
   }
}
