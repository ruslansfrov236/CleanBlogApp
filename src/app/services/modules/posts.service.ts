import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { UpdatePosts } from '../../entities/update-posts';
import { CreatePosts } from '../../entities/create-posts';
import { Posts } from '../../modules/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http:HttpClientService) { }

  async read():Promise<Posts[]>{
    const data:Observable<Posts[]> = await this.http.get({
      controller:"posts",
    
    })
   return await firstValueFrom(data)
   }
   async getById(id:string):Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"posts",
    
    }, id)
    await firstValueFrom(data)
   }
   async create(createposts:CreatePosts):Promise<CreatePosts>{
    const data:Observable<CreatePosts> = await this.http.post({
      controller:"posts",
    
    }, createposts)
    return  await firstValueFrom(data)
   }
   async update(updateposts:UpdatePosts):Promise<UpdatePosts>{
    const data:Observable<UpdatePosts> = await this.http.put({
      controller:"posts",
    
    }, updateposts)
    return  await firstValueFrom(data)
   }

   async delete(id:string):Promise<void>{
    const data:Observable<void> = await this.http.delete({
      controller:"posts",
      action:"delete"
    
    }, id)
    await firstValueFrom(data)
   }
}
