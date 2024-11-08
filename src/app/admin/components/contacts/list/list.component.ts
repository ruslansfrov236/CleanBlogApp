import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ContactDescription } from '../../../../modules/contact-description';
import { CreateComponent } from '../create/create.component';
import { ContactDescriptionService } from '../../../../services/modules/contact-description.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  displayedColumns: string[] = ['description', 'createdDate', 'updatedDate', 'edit', 'create', 'delete'];
  dataSource: CdkTableDataSourceInput<ContactDescription>  = null;
  @ViewChild(CreateComponent, { static: false })   createComponent:CreateComponent;
  @Output() editModeChange = new EventEmitter<boolean>();
  constructor(private contactService: ContactDescriptionService, private route:ActivatedRoute) {}

  
  async ngOnInit(): Promise<void> {
   await this.getContactDescription();
  }

 async getContactDescription(){
    await this.contactService.read().then(element=>{
      this.dataSource=element.contactDescription;

      
      console.log(element)
    });
  }

  async showAboutComponent(isEditMode: boolean){
    
    await  this.editModeChange.emit(isEditMode);
   }
}
