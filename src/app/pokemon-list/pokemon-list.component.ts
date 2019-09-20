import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";
import { PokemonService } from "../pokemons/pokemon.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
  pokemons: Array<Pokemon> = [];
  offset: number = 0;
  limit: number = 20;

  selectedPokemon: Pokemon = null
  @Output() selectedPokemonEE: EventEmitter<Pokemon> = new EventEmitter();

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    console.log(`offset: ${this.offset}, limit: ${this.limit}`);
    this.pokemonService
      .getPokemons(this.offset, this.limit)
      .subscribe(pokemons => (this.pokemons.push(...pokemons.data)));
  }

  onSelect(pokemon: Pokemon) {
    console.log(pokemon.name);
    this.selectedPokemon = pokemon;
    this.selectedPokemonEE.emit(this.selectedPokemon);
  }

  onScroll() {
    // Load more pokemons!
    console.log("scrolled!");
    this.offset += 5;
    this.getPokemons();
  }
}
