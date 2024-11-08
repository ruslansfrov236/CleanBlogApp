import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { firstValueFrom, Head } from 'rxjs';
import { UpdateHeader } from '../../entities/update-header';
import { CreateHeader } from '../../entities/create-header';
import { Header } from '../../modules/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor( private http:HttpClientService) { }

  async read():Promise<{header:Header[]}>{
    const data:Observable<{header:Header[]}> = await this.http.get({
      controller:"header",
    
    })
  return  await firstValueFrom(data)
   }
   async getById(id:string):Promise<{header:Header}>{
    const data:Observable<{header:Header}> = await this.http.get({
      controller:"header",
    
    }, id)
   return await firstValueFrom(data)
   }
   async create(createheader:CreateHeader):Promise<CreateHeader>{
    const data:Observable<CreateHeader> = await this.http.post({
      controller:"Header",
    
    }, createheader)
    debugger
    return  await firstValueFrom(data)
   }
   async update(updateheader:UpdateHeader):Promise<UpdateHeader>{
    const data:Observable<UpdateHeader> = await this.http.put({
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
