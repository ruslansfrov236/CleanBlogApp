import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateAboutDto } from '../../../entities/createAboutDto';
import { UpdateAbout } from '../../../entities/update-about';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent  {
 
  @ViewChild(ListComponent) listComponent: ListComponent;
  @Input() isEditMode: boolean=false;
  onEditModeChange(value: boolean): void {
    this.isEditMode = value;
  }
 
 
 updateAbout (updateAbout:UpdateAbout){
 this.listComponent.getAbout();
 this.isEditMode=true;
 }
  createAbout(createAboutDto:CreateAboutDto){

    this.listComponent.getAbout();
    this.isEditMode=false;
   } 
}
