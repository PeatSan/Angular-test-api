import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-test';

  pokemon:any;
  constructor(private service:PokemonService) {
    this.service.getPokemon().subscribe(res => {
      this.pokemon = res;
    });
  }


}
