import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { firstValueFrom, Observable } from 'rxjs';
import {  CreateAboutDto } from '../../entities/createAboutDto';
import { UpdateAbout } from '../../entities/update-about';
import { About } from '../../modules/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClientService) { }


  async read():Promise<{about:About[]}>{
    const data:Observable<{about:About[]}> = await this.http.get({
      controller:"about"
    })
   return await firstValueFrom(data);
  }
  async readById(id:string):Promise<{about:About}>{
    const data :Observable<{about:About}> = await this.http.get({
      controller:"about",
     
    }, id)

  return  await firstValueFrom(data);
  }

  async create(createAbout:CreateAboutDto):Promise<CreateAboutDto>{
   

    const data:Observable<CreateAboutDto> = await this.http.post({
    
      controller:"About",
     
     
    },createAbout);
   
   return await firstValueFrom(data);
  }
  async edit(updateAbout:UpdateAbout):Promise<UpdateAbout>{

    const data:Observable<UpdateAbout> = await this.http.put({
      controller:"about"
    }, updateAbout);
   return await firstValueFrom(data);
  }

  async delete(id:string):Promise<void>{
    const data :Observable<void> = await this.http.delete({
      controller:"about",
      action:"delete"
    }, id)

    await firstValueFrom(data);
  }
}