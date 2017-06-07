
// 1 -- Importation de la librairie Angular Core
import { Component } from '@angular/core';
import { Contact } from './shared/models/contact';

// -- Déclaration des composants 
@Component({

  // 2 -- Selecteur pour le rendu dans l'application
  selector: 'app-root',

  // 2.b -- Le contenu HTML de notre composant
  templateUrl : './app.component.html',

 // 2.c -- Le contenu CSS 
  styleUrls: ['./app.component.css']

})

// 3 -- Notre code JS
export class AppComponent {
  
  // Déclaration d'une variable title
  title = 'contact';

  // Déclaration d'un objet contact
  contact ={
    id : 1,
    fullname : "Gab Malherbe",
    username : "gabmal"
  }

  // Avec plusieurs contacts : 

     Contacts = [
    {id:1, fullname: "Gabriel", username:"Malherbe"},
    {id:2, fullname: "Jean", username:"Dubois"},
    {id:3, fullname: "Marie", username:"Couchtoala"} 
  ]

  // -- Choix de mon user actif
  contactActif : Contact;

  // -- Ma fonction choisircontact prend un contact en paramètre et le transmet à la variable contactActif
  choisirUnContact(contact){
    this.contactActif = contact;
    console.log(this.contactActif);
  }
} 

