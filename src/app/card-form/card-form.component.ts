import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
      // Validators.maxLength(5),
      // Validators.pattern(/\s/)
    ]),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl('')
  });

  onSubmit() {
  }
}
