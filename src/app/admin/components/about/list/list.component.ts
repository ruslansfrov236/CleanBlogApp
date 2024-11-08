import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { About } from '../../../../modules/about';
import { MatTableDataSource } from '@angular/material/table';
import { AboutService } from '../../../../services/modules/about.service';
import { Observable } from 'rxjs';
import { AnyTxtRecord } from 'dns';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { UpdateAbout } from '../../../../entities/update-about';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'] // Fixed styleUrl to styleUrls
})
export class ListComponent implements OnInit {
  @Output() editModeChange = new EventEmitter<boolean>();
  displayedColumns: string[] = ['description', 'createdDate', 'updatedDate', 'edit', 'create', 'delete'];
  dataSource: CdkTableDataSourceInput<About>  = null;
  @ViewChild(CreateComponent, { static: false })   createComponent:CreateComponent; 
  @Output() deleteAbout: EventEmitter<string> = new EventEmitter<string>();
  constructor(private aboutService: AboutService, private route:ActivatedRoute) {}

   
  async ngOnInit(): Promise<void> {
   await this.getAbout();
   
  }
   async showAboutComponent(isEditMode: boolean){
    
   await  this.editModeChange.emit(isEditMode);
  }
  async delete(id:string):Promise<void>{
  await this.aboutService.delete(id)
  this.deleteAbout.emit(id)
}


   
  async getAbout(): Promise<void> {
    try {
       await this.aboutService.read().then( data=>{
        this.dataSource = data.about;
      }
       
      );
    
      console.log(this.dataSource)
    } catch (error) {
      console.error('Error fetching About data', error);
    }
  }
}
