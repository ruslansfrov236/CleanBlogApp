import { Component } from '@angular/core';
import { PostsService } from '../../../../services/modules/posts.service';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Posts } from '../../../../modules/posts';

@Component({
  selector: 'app-list',
  standalone: false,
 
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  displayedColumns: string[] = ['title', 'createdDate', 'updatedDate', 'edit', 'create', 'delete'];
  dataSource: CdkTableDataSourceInput<Posts>  = null;
  constructor(private postService:PostsService){}
  async getPost(): Promise<void> {
    try {
       await this.postService.read().then( data=>{
        this.dataSource = data
      }
       
      );
    
      console.log(this.dataSource)
    } catch (error) {
      console.error('Error fetching About data', error);
    }
  }
   onEdit(id:string){}
   onCreate(){}
}
