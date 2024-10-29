import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateAbout } from '../../entities/create-about';
import { UpdateAbout } from '../../entities/update-about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClientService) { }


  async read():Promise<void>{
    const data:Observable<void> = await this.http.get({
      controller:"about"
    })
    await firstValueFrom(data);
  }
  async readById(id:string):Promise<void>{
    const data :Observable<void> = await this.http.get({
      controller:"about"
    }, id)

    await firstValueFrom(data);
  }

  async create(createAbout:CreateAbout):Promise<CreateAbout>{

    const data:Observable<CreateAbout> = await this.http.post({
      controller:"about"
    }, createAbout);
   return await firstValueFrom(data);
  }
  async edit(updateAbout:UpdateAbout):Promise<UpdateAbout>{

    const data:Observable<UpdateAbout> = await this.http.post({
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