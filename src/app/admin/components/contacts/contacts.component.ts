import { Component, Input, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateContactDescription } from '../../../entities/create-contact-description';
import { UpdateContactDescription } from '../../../entities/update-contact-description';

@Component({
  selector: 'app-contacts',
  standalone: false,
  
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  @ViewChild(ListComponent) listComponent: ListComponent;

  @Input() isEditMode: boolean=false;
  onEditModeChange(value: boolean): void {
    this.isEditMode = value;
  }

  createContact(CreateContactDescription:CreateContactDescription){
    this.listComponent.getContactDescription();
  }
  updateContact(updateContactDescription:UpdateContactDescription){
    this.listComponent.getContactDescription();
  }
}
