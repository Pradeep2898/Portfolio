import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ServicesService } from '../services.service';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private serv:ServicesService, private spnr:NgxSpinnerService) {
    this.myForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      role:['',Validators.required],
      aboutU:['',[Validators.required,Validators.minLength(30)]]
    });
  }
  
  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.spnr.show();
    this.serv.postMessage(data).subscribe(respnse => {
      location.href = "https://mailthis.to/confirm" ;
      this.spnr.hide();
    }, error => {
      this.spnr.hide();
    });
  }

}
