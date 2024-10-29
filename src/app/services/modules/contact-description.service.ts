import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateContactDescription } from '../../entities/create-contact-description';
import { UpdateContactDescription } from '../../entities/update-contact-description';

@Injectable({
  providedIn: 'root'
})
export class ContactDescriptionService {

  constructor(private http:HttpClientService) {

   }

   async read():Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"contactDescription",
    
    })
    await firstValueFrom(data)
   }
   async getById(id:string):Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"contactDescription",
    
    }, id)
    await firstValueFrom(data)
   }
   async create(createContactDescription:CreateContactDescription):Promise<CreateContactDescription>{
    const data:Observable<CreateContactDescription> = await this.http.post({
      controller:"contactDescription",
    
    }, createContactDescription)
    return  await firstValueFrom(data)
   }
   async update(updateContactDescription:UpdateContactDescription):Promise<UpdateContactDescription>{
    const data:Observable<UpdateContactDescription> = await this.http.post({
      controller:"contactDescription",
    
    }, updateContactDescription)
    return  await firstValueFrom(data)
   }

   async delete(id:string):Promise<void>{
    const data:Observable<void> = await this.http.delete({
      controller:"contactDescription",
      action:"delete"
    
    }, id)
    await firstValueFrom(data)
   }
}
