import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { STUDENTS } from '../mock-student-list';
import { Student } from '../Student';


@Component({
  selector: 'app-detail-students',
  templateUrl:'detail-student.html',
  styles: [
  ]
})
export class DetailStudentsComponent implements OnInit {

  public student:Student;
  public studentList:Student[]=STUDENTS;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectStudent();
  }

  selectStudent(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.student=this.studentList[id];
  }

}
