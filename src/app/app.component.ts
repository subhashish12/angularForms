import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user : FormGroup;
  constructor(private fb:FormBuilder){
    this.user = fb.group({
      'firstName':[ null ,Validators.required],
      'lastName':[ null,Validators.required],
      'email':[ null,[Validators.required,Validators.email]],
      'phone':[null,Validators.required],
      'message':[null,Validators.required]
    })
  }

  userData(data){
    console.log('my data',data);
  }
}
