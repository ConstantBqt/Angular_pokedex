import { Component, OnInit } from "@angular/core";
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

  onScroll() {
    // Load more pokemons!
    console.log("scrolled!");
    this.offset += 5;
    this.getPokemons();
  }
}
