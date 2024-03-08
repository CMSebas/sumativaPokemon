// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
import {doc, getDoc,setDoc } from 'firebase/firestore';
import { PokeapiService } from './../Services/apiservice.service';
import { Firestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';


// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

pokemon:any;

pokemon2:any;
item2:any;
name: any;

item:any;
id: any;
idItem: any;
idName: any;
estadoLed1:any;
tableled1:any;
  typeName: any;
  typeName1: any;
type: any;
pokemonTypes: any;
typesList: any;





  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private api: PokeapiService,private db:Firestore) {}
 /* async cambiarLed1(name:string){
    this.api.getPokemon(name).subscribe((response => {
      // Dentro de la función de éxito de la suscripción:
      // Asigna el nombre del Pokémon a la variable local 'pokemon'.
      this.pokemon = response;
      console.log(this.pokemon);
      this.typeName1=response.types[0].type.name;
      console.log("hola");
      console.log(this.typeName1);
      this.tableled1= doc(this.db,'controlLed',this.typeName1);
      this.estadoLed1=!this.estadoLed1;
      await setDoc(this.tableled1,{cambio:this.estadoLed1});
    }))
    }/*/

  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonDataID(name1: string,name:string) {
    try {
        // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemon(name).subscribe((async response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon = response;
        this.typesList = [];
        
        this.tableled1= doc(this.db,'controlPoke',name1);
        this.estadoLed1=response.types[0].type.name;
        await setDoc(this.tableled1,{tipo:this.estadoLed1});
        

        for(let i = 0; i < response.types.length; i++){
          console.log(`Tipo ${i + 1}: ${response.types[i].type.name}`);
          this.typeName=response.types[i].type.name;
         
          this.typesList[i] = this.typeName;
          console.log(this.typesList[i]);

        }

        

      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }


 

  

  
}

