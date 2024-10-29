import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { CreateMessage } from '../../entities/create-message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor( private http:HttpClientService) { }

  async read():Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"message",
    
    })
    await firstValueFrom(data)
   }
   async getById(id:string):Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"message",
    
    }, id)
    await firstValueFrom(data)
   }
   
   async delete(id:string):Promise<void>{
    const data:Observable<void> = await this.http.delete({
      controller:"message",
      action:"delete"
    
    }, id)
    await firstValueFrom(data)
   }
}
