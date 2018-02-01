import { Injectable } from '@angular/core';
import { Student } from '../Student';

@Injectable()
export class StudentService {
students:Array<Student>=Array({_id:'1',name:'Asaad Saad',stuID:'12345',email:'asaad@mum.edu'},
  {_id:'2',name:'Molomjamts',stuID:'12344',email:'mkhaimchig@mum.edu'});
  constructor() { }
  getData(){
    return this.students;
  }
  getStudentById(id){
    return this.students.find(x=>x._id==id);
  }
}
