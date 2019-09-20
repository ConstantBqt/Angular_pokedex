import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemons/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon : Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {

  }

  @Input()
  set selectedPokemon(selectedPokemon: Pokemon) {
    console.log('prev pokemon name: ', this.pokemon ? this.pokemon.name : "");
    console.log('new name: ', selectedPokemon ? selectedPokemon.name : "");
    this.pokemon = selectedPokemon;
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    let id = this.pokemon ? this.pokemon.id : null;
    if(id != null) {
      console.log("Loading Pokemon details....");
      this.pokemonService.getPokemon(id).subscribe(result => this.pokemon = result);
    }
    else this.pokemon = null;
  }

  
}
