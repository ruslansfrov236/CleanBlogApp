import { Component, EventEmitter, Output } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateContactDescription } from '../../../../entities/create-contact-description';
import { ContactDescriptionService } from '../../../../services/modules/contact-description.service';

@Component({
  selector: 'app-create',
  standalone: false,

  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  @Output() createContact: EventEmitter<CreateContactDescription> = new EventEmitter<CreateContactDescription>();

  myForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private contactDescriptionService: ContactDescriptionService) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(150)]]
    });
  }

  async onSubmit() {

    if (this.myForm.valid) {

      const descr = this.myForm.value.description;
      const contact = new CreateContactDescription()
      contact.description = descr

      await this.contactDescriptionService.create(contact);
      this.createContact.emit(contact)
    }
  }

}
