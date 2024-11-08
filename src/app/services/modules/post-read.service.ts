import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { UpdatePostRead } from '../../entities/update-post-read';
import { CreatePostRead } from '../../entities/create-post-read';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PostReadService {

  constructor( private http:HttpClientService) { }

  async read():Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"postread",
    
    })
    await firstValueFrom(data)
   }
   async getById(id:string):Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"postread",
    
    }, id)
    await firstValueFrom(data)
   }
   async create(createposts:CreatePostRead):Promise<CreatePostRead>{
    const data:Observable<CreatePostRead> = await this.http.post({
      controller:"postread",
    
    }, createposts)
    return  await firstValueFrom(data)
   }
   async update(updateposts:UpdatePostRead):Promise<UpdatePostRead>{
    const data:Observable<UpdatePostRead> = await this.http.put({
      controller:"postread",
    
    }, updateposts)
    return  await firstValueFrom(data)
   }

   async delete(id:string):Promise<void>{
    const data:Observable<void> = await this.http.delete({
      controller:"postread",
      action:"delete"
    
    }, id)
    await firstValueFrom(data)
   }
}

