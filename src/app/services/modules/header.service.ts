import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { firstValueFrom } from 'rxjs';
import { UpdateHeader } from '../../entities/update-header';
import { CreateHeader } from '../../entities/create-header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor( private http:HttpClientService) { }

  async read():Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"header",
    
    })
    await firstValueFrom(data)
   }
   async getById(id:string):Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"header",
    
    }, id)
    await firstValueFrom(data)
   }
   async create(createheader:CreateHeader):Promise<CreateHeader>{
    const data:Observable<CreateHeader> = await this.http.post({
      controller:"header",
    
    }, createheader)
    return  await firstValueFrom(data)
   }
   async update(updateheader:UpdateHeader):Promise<UpdateHeader>{
    const data:Observable<UpdateHeader> = await this.http.post({
      controller:"header",
    
    }, updateheader)
    return  await firstValueFrom(data)
   }

   async delete(id:string):Promise<void>{
    const data:Observable<void> = await this.http.delete({
      controller:"header",
      action:"delete"
    
    }, id)
    await firstValueFrom(data)
   }
}
