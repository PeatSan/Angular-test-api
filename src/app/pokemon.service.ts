import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://restcountries.com/v3.1/all'

  constructor(private Heekemon:HttpClient) { }

  getPokemon():Observable<any> {
    return this.Heekemon.get<any>(this.url)
  }
}
