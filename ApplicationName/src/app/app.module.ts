import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CouleursDirective } from './directives/couleurs.directive';
import { BorderCardDirective } from './directives/border-card.directive';
import { DetailStudentsComponent } from './detail-students/detail-students.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    CouleursDirective,
    BorderCardDirective,
    DetailStudentsComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
