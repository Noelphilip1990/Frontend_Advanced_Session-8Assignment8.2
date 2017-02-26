import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
	title = 'Assignament 8.2!';
	
	emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+(\.[a-z]{3,15})$';
	phoneRegex = '[0-9]{10}'
	passwordRegex ='[a-z0-9]{7,20}'
	constructor(fb: FormBuilder) {
		this.complexForm = fb.group({
			names: [null, Validators.required],
			username: [null, Validators.required],
			email: [null, [Validators.required, <any>Validators.pattern(this.emailRegex)]],
			phone: [null, [Validators.required,Validators.minLength(10),Validators.pattern(this.phoneRegex)]],
			password: [null, [Validators.required, Validators.pattern(this.passwordRegex)]],
			cpassword: [null, Validators.required]
	})
	}
	complexForm: FormGroup;

	submitForm(form: any): void {
		console.log('Form Data: ');
		console.log(form);
	}

	
 


}
