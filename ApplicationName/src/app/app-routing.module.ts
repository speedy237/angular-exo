import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailStudentsComponent } from './detail-students/detail-students.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'students',component:StudentsComponent},
  {path:'detail-students/:id',component:DetailStudentsComponent},
  {path: '', redirectTo: '/students', pathMatch: 'full'}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
