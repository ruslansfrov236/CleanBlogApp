import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../../../services/modules/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatePosts } from '../../../../entities/create-posts';
import { title } from 'process';

@Component({
  selector: 'app-create',
  standalone: false,
  
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {
  @Output() createPost: EventEmitter<CreatePosts> = new EventEmitter<CreatePosts>();
  myForm: FormGroup;


 
  constructor(private fb: FormBuilder, private postService:PostsService, private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.myForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(4) , Validators.maxLength(150)]],
      content: ['', [Validators.required, Validators.minLength(4) , Validators.maxLength(150)]],
      title: ['', [Validators.required, Validators.minLength(4) , Validators.maxLength(150)]]
    });
  }

  async onSubmit() {
    debugger
    if (this.myForm.valid) {
      
        const descr = this.myForm.value.description; 
        const _content = this.myForm.value.content;
        const  title = this.myForm.value.title;
        const posts : CreatePosts={
         
            title:title ,
            description: descr,
            content: _content
          
        }; 
       

       
        await this.postService.create(posts); 
        this.createPost.emit(posts)
    }
}
}
