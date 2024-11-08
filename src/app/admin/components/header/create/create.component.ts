import { Component, EventEmitter, Output } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateContactDescription } from '../../../../entities/create-contact-description';
import { ContactDescriptionService } from '../../../../services/modules/contact-description.service';
import { HeaderService } from '../../../../services/modules/header.service';
import { CreateHeader } from '../../../../entities/create-header';
import { title } from 'process';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-create',
  standalone: false,

  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  @Output() createHeader: EventEmitter<CreateHeader> = new EventEmitter<CreateHeader>();
  
  myForm: FormGroup;
  Base64Image: string |ArrayBuffer | null;
  selectedFile:File| null;
  constructor(private fb: FormBuilder,private httpClient:HttpClient, private route: ActivatedRoute, private router: Router, private headerService: HeaderService) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(150)]],
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(250)]],
      pageNumber: ['', [Validators.required, Validators.min(1), Validators.max(150)]],
   
    });
  }
  onFileChange(event: Event): Promise<{ file: File, base64Image: string | ArrayBuffer | null }> {
  return new Promise((resolve, reject) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const _file = input.files[0];
      this.selectedFile = _file;
      const reader = new FileReader();
      
      reader.readAsDataURL(_file);
      reader.onload = () => {
        this.Base64Image = reader.result;
        
        resolve({ file: _file, base64Image: reader.result });


      };
      reader.onerror = (error) => {
        reject(error);
      };
    } else {
      reject(new Error('No file selected'));
    }
  });
}

  async onSubmit() {
    debugger
    if (this.myForm.valid   ) {
      const descr = this.myForm.value.description;
      const title = this.myForm.value.title;
      const pageNumber = this.myForm.value.pageNumber;
     
      const header = new CreateHeader();
      header.Description = descr;
      header.Title = title;
      header.PageNumber = pageNumber;
      header.File= this.selectedFile
        
              await this.headerService.create(header);
      this.createHeader.emit(header);
    }
  }
}

