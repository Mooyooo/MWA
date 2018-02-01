import { Component, OnInit } from '@angular/core';
import { get } from 'selenium-webdriver/http';
import { StudentService } from './student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../Student';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   id:number;
   private sub:Subscription;
  student:Student;
  constructor(private route:ActivatedRoute, private studentService:StudentService) { 
    this.sub = this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.student=this.studentService.getStudentById(this.id);
    });
    
  }
   
  ngOnInit() {
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
