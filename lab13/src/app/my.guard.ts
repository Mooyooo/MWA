import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StudentService } from './student.service';
import { Router } from '@angular/router';

@Injectable()
export class MyGuard implements CanActivate {
  constructor(private studentService: StudentService, private router:Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.studentService.getStudentById(next.params['id']) != null) {
      console.log('canActive:true');
      return true;
    }
    else {
       console.log('canActive:false');
       this.router.navigate(['/error']);
       return false;
    }
  }
}
