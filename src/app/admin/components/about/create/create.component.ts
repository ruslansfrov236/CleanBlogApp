import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from '../../../../services/modules/about.service';
import { About } from '../../../../modules/about';
import {   CreateAboutDto } from '../../../../entities/createAboutDto';
import { emit } from 'process';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: false,
 
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {
  @Output() createAbout: EventEmitter<CreateAboutDto> = new EventEmitter<CreateAboutDto>();
  myForm: FormGroup;
 
  currentItemId: string | null = null;
  constructor(private fb: FormBuilder, private aboutService:AboutService, private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.myForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(4) , Validators.maxLength(300)]]
    });
  }


 

  async onSubmit() {
  
    if (this.myForm.valid) {
      
        const descr = this.myForm.value.description; 
        const about=  new CreateAboutDto()
      about.description=descr
       
        await this.aboutService.create(about); 
        this.createAbout.emit(about)
    }
}

   
  }

