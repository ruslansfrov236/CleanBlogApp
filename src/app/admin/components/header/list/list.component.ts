import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { About } from '../../../../modules/about';
import { CreateComponent } from '../create/create.component';
import { HeaderService } from '../../../../services/modules/header.service';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Output() editModeChange = new EventEmitter<boolean>();
  displayedColumns: string[] = ['title', 'createdDate', 'updatedDate', 'edit', 'create', 'delete' ,"details"];
  dataSource: CdkTableDataSourceInput<About>  = null;
  @ViewChild(CreateComponent, { static: false })   createComponent:CreateComponent; 
  @Output() deleteAbout: EventEmitter<string> = new EventEmitter<string>();

  constructor(private headerService:HeaderService){}
  async ngOnInit(): Promise<void> {
    await this.getHeader();
    
   }
    async showAboutComponent(isEditMode: boolean){
     
    await  this.editModeChange.emit(isEditMode);
   }

   async getHeader(): Promise<void> {
    try {
       await this.headerService.read().then( data=>{
        this.dataSource = data.header;
      }
       
      );
    
      console.log(this.dataSource)
    } catch (error) {
      console.error('Error fetching About data', error);
    }
  }
}
