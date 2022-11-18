import { Component } from '@angular/core';
import { Person } from './classes/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EXO1';
  nom:string='';
  prenom:string='';
  persons:Person[]=[
    {name:"JORDAN",surname:"Louis"},
    {name:"AZOR",surname:"Megane"}

  ];

  public addToList() {

    if (this.persons.length>=5) {
      alert("capacity exceeded")
    }
    else {
      if(this.nom=='' ||this.prenom==''){
        alert("vous devez remplir tous les champs");
      }
      else{
        let person=new Person(this.nom,this.prenom);
        this.persons.push(person);
        this.nom = '';
        this.prenom='';

        alert("succeffull completed");

      }
     
    }
}



}
