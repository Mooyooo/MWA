import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: any;
  postData: string = '';
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router:Router ) {
    this.myForm = fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'postText': ['', [Validators.required, this.valiDateLength]]
    });


    // this.myForm.statusChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm.value);
   this.router.navigate(['/confirm']);
    return false;
    
  }

  valiDateLength(control: FormControl) {
    if (control.value.length < 10) {
      return { 'length': true }
    }
    else {
      return null;
    }
  }

  getData() {

    this.userService.getPost().subscribe(
      res => {
        res => res.json();
        this.postData = res[0].title;
      }
    )
    this.userService.getUserInfo().subscribe(res => {
      res => res.json();
      this.data = res;
      // this.myForm.setValue({'name':this.data.name, 'email':this.data.email,'post':''});
      this.myForm.setValue({ 'name': this.data.name, 'email': this.data.email, 'postText': this.postData });
      // this.myForm.controls['email']=this.data.email;
      console.log(this.data);
      // console.log('postdata:'+this.postData);
    });



  }
}
