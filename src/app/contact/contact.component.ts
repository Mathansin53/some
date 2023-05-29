import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
loginForm = new FormGroup({
firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*$'),Validators.maxLength(8)]),
lastname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*$'),Validators.maxLength(8)]),
qualification: new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(8)]),
mobilenumber : new FormControl('',[Validators.required,Validators.pattern('[0-9]*$'),Validators.maxLength(10)]),
emailid: new FormControl('',[Validators.required,Validators.email])
})
loginuser()
{
  console.log(this.loginForm.value);
  if(this.loginForm.valid)
  {
    alert("Thank You");
    this.loginForm.reset();
  }
}
get firstname()
{
  return this.loginForm.get('firstname');
}
get lastname()
{
  return this.loginForm.get('lastname');
}
get qualification()
{
  return this.loginForm.get('qualification');
}
get mobilenumber()
{
  return this.loginForm.get('mobilenumber');
}
get emailid()
{
  return this.loginForm.get('emailid');
}
}
