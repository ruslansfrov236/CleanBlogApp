import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateContactDescription } from '../../entities/create-contact-description';
import { UpdateContactDescription } from '../../entities/update-contact-description';
import { ContactDescription } from '../../modules/contact-description';

@Injectable({
  providedIn: 'root'
})
export class ContactDescriptionService {

  constructor(private http:HttpClientService) {

   }

   async read():Promise<{contactDescription:ContactDescription[]}>{
    const data:Observable<{contactDescription:ContactDescription[]}> = await this.http.get({
      controller:"ContactDescription",
    
    })
   return await firstValueFrom(data)
   }
   async getById(id:string):Promise<{contactDescription:ContactDescription}>{
    const data:Observable<{contactDescription:ContactDescription}> = await this.http.get({
      controller:"ContactDescription",
    
    }, id)
    return await firstValueFrom(data)
   }
   async create(createContactDescription:CreateContactDescription):Promise<CreateContactDescription>{
    const data:Observable<CreateContactDescription> = await this.http.post({
      controller:"ContactDescription",
    
    }, createContactDescription)
    return  await firstValueFrom(data)
   }
   async update(updateContactDescription:UpdateContactDescription):Promise<UpdateContactDescription>{
    const data:Observable<UpdateContactDescription> = await this.http.put({
      controller:"ContactDescription",
    
    }, updateContactDescription)
    return  await firstValueFrom(data)
   }

   async delete(id:string):Promise<void>{
    const data:Observable<void> = await this.http.delete({
      controller:"ContactDescription",
      action:"delete"
    
    }, id)
    await firstValueFrom(data)
   }
}
