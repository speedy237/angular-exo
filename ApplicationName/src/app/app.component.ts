import { Component, OnInit} from '@angular/core';
import {Student} from './Student'
import { STUDENTS } from './mock-student-list';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: 'app-component.html',
  styles: []
})
export class AppComponent implements OnInit {
  idStudent: number;
  studentList: Student[]=STUDENTS;
  studentSelected: Student|undefined;
  constructor(private router: Router) { }
   ngOnInit(): void {
      console.table(this.studentList);
      console.table(this.studentList[0].name);
   }
   selectStudent=(event: MouseEvent) => {
    const index:number=+ (event.target as HTMLInputElement).value;
    console.log(`vous avez clique sur l'etudiant ${this.studentList[index].name}`)
   }
   selectOneStudent(studentId: string) { 
    console.log("youpi")
    const student: Student|undefined = this.studentList.find(
      student => student.id == +studentId
    );
     if(student) {
      console.log(`vous avez cliquer sur l'etudiant ${student.name}`);
      this.studentSelected=student;
     }
     else {
      console.log("l'etudiant n'existe pas");
     }

  }
}
