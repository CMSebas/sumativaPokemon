// Importa los módulos necesarios de Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Marca la clase como un servicio inyectable, lo que permite que Angular lo inyecte automáticamente donde sea necesario.
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  // Define la URL base de la PokeAPI
  private apiUrl = 'https://pokeapi.co/api/v2/';

  // El constructor recibe una instancia de HttpClient, que será utilizada para realizar solicitudes HTTP.
  constructor(private http: HttpClient) { }

  // Método para obtener información de un Pokémon por su ID.
  // Retorna un Observable, ya que las solicitudes HTTP en Angular son asíncronas.
  /*/<ion-input [(ngModel)]="id"></ion-input>
            <ion-img [src]=pokemon.sprites.front_default></ion-img>
            <ion-label *ngFor="let type of typesList">{{ type }} </ion-label>
            <h1>Led 1</h1>
        <ion-button (click)="getPokemonDataID('cambio',id)"  id="miBoton" ><ion-icon name="power-outline"></ion-icon></ion-button>/*/

  getItemID(id: number): Observable<any> {
    // Utiliza el método get del HttpClient para realizar una solicitud GET a la URL de la PokeAPI con el nombre del Pokémon.
    return this.http.get(this.apiUrl+"item/"+id);
  }
  getPokemon(name: string): Observable<any> {
    // Utiliza el método get del HttpClient para realizar una solicitud GET a la URL de la PokeAPI con el ID del Pokémon.
    return this.http.get(this.apiUrl+"pokemon/"+name);
  }



  getItemName(name: string): Observable<any> {
    // Utiliza el método get del HttpClient para realizar una solicitud GET a la URL de la PokeAPI con el nombre del Pokémon.
    return this.http.get(this.apiUrl+"item/"+name);
  }

  

  

}