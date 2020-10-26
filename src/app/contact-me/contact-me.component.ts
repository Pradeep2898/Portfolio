import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.myForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      role:['',Validators.required],
      aboutU:['',[Validators.required,Validators.minLength(30)]]
    });
  }
  
  ngOnInit(): void {
  }

}
