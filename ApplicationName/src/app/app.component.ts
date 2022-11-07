import { Component, OnInit } from '@angular/core';
import {Student} from './Student'
import { STUDENTS } from './mock-student-list';

@Component({
  selector: 'app-root',
  template: `
    <h1> WELCOME JORDAN    </h1>`,
  styles: []
})
export class AppComponent implements OnInit {
  studentList: Student[]=STUDENTS;
   ngOnInit(): void {
      console.table(this.studentList);
      console.table(this.studentList[0].name);
   }
   selectStudent=(studentName: string) => {
    console.log(`vous avez cliquer sur l'etudiant  ${studentName}`)
   }
   
}
