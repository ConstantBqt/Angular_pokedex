import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  selectedPokemon: Pokemon = null;
  
  constructor() { }

  ngOnInit() {
  }

  onPokemonSelected(pokemon :Pokemon){
    console.log("selectedPokemon: " + pokemon.name );
    this.selectedPokemon = pokemon;
  }

}
