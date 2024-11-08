import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { ContactDescriptionService } from '../../../../services/modules/contact-description.service';
import { ContactDescription } from '../../../../modules/contact-description';
import { UpdateContactDescription } from '../../../../entities/update-contact-description';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  data: ContactDescription;
  @Output() updateContact: EventEmitter<UpdateContactDescription> = new EventEmitter<UpdateContactDescription>();
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactDescription:ContactDescriptionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
        const data: { contactDescription: ContactDescription } = await this.contactDescription.getById(_id);
        this.data = data.contactDescription
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
      const contact = new ContactDescription();
      contact.description = descr;
      contact.id = id
      try {
        await this.contactDescription.update(contact);
        this.updateContact.emit(contact);
        this.router.navigate(["/admin/contacts"])
        console.log('Update successful:', contact);

      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
  }
}
