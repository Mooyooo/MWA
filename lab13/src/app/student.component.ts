import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: []
})
export class StudentComponent implements OnInit {

  stList: Array<Student>;
  constructor(private studentService: StudentService) {

  }

  ngOnInit() {
    this.stList = this.studentService.getData();
    for (var a of this.stList) {
      console.log(a.name);
    }
  }

}


