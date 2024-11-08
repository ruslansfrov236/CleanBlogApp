import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateAbout } from '../../../../entities/update-about';
import { AboutService } from '../../../../services/modules/about.service';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { About } from '../../../../modules/about';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  data: About;
  @Output() updateAbout: EventEmitter<UpdateAbout> = new EventEmitter<UpdateAbout>();
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aboutService: AboutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
   

   
    this.myForm = this.fb.group({
      description: [this.data?.description || '', [Validators.required, Validators.minLength(4), Validators.maxLength(150)]]
    });
    await this.getEditById();
  }
  
  async getEditById(): Promise<void> {
    debugger
  
    const _id = this.route.snapshot.paramMap.get('id');
  
    try {
      if (_id) {
        const data:{about:About}= await this.aboutService.readById(_id);
       this.data=  data.about
       console.log(this.data)
      } else {
        console.warn('ID not found in route');
        return null;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  async onSubmit() {
    if (this.myForm.valid) {
      const descr = this.myForm.value.description;
      const id = this.data.id;
      const about = new UpdateAbout();
      about.description = descr;
      about.id= id
      try {
        await this.aboutService.edit(about); 
        this.updateAbout.emit(about);
        this.router.navigate(["/admin/about"])
        console.log('Update successful:', about);
      
      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
  }
}
