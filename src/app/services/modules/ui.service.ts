import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateMessage } from '../../entities/create-message';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private http:HttpClientService) { }

  async readAbout():Promise<void> {
    const data :Observable<void> = await this.http.get({
      controller:"ui",
      action:"about"
    })
    await firstValueFrom(data)
  }
  async readHeader():Promise<void> {
    const data :Observable<void> = await this.http.get({
      controller:"ui",
      action:"header"
    })
    await firstValueFrom(data)
  }
  async readPosts():Promise<void> {
    const data :Observable<void> = await this.http.get({
      controller:"ui",
      action:"post"
    })
    await firstValueFrom(data)
  }
  async readContactDescription():Promise<void> {
    const data :Observable<void> = await this.http.get({
      controller:"ui",
      action:"contact-description"
    })
    await firstValueFrom(data)
  }
  async create(createMessage:CreateMessage):Promise<CreateMessage>{
    const data :Observable<CreateMessage> = await this.http.post({
      controller:"ui",
      action:"create/message"
    }, createMessage)
   return await firstValueFrom(data)
  }
}
